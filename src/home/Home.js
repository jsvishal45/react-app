import React, { Component } from 'react';
import Heading from './Heading';
import BrandCategory from './../model/BrandCategory';


class Home extends Component {


  constructor(props) {
    super(props);
    this.state = { 
      brands: BrandCategory.getBrand(),
      Categories: BrandCategory.getCategory(),
      popular:BrandCategory.getPopular(),
      showHint:true,
      activeBrandID : [],
      activeCatID : [],
      str:"",
      result:[],
      hideClass:""
    }
  }

  searchPopular(search){
       this.setState({ 
            str:search,
      });
   
      this.callAPIData()
  }

  callAPIData(){

    var _this = this;
    var url = "https://api.myjson.com/bins/w9by6";
    
      url = url + "?site_id=1";
      if(this.state.activeCatID.length){
        url = url + "&catID="+ this.state.activeCatID.toString();
      }
      if(this.state.activeBrandID.length){
        url = url + "&brandID="+ this.state.activeBrandID.toString();
      }
      if(this.state.str != ""){
        url = url + "&str="+ this.state.str;
      }
    
    
    _this.setState({ 
      showHint:true,
      hideClass:"hidden"
    });

    fetch(url).then( function(res) {
      return res.json();
       
    }).then( function(res){
        setTimeout(function(){
          _this.setState({
            result: res.data,
            showHint:false,
          });
        },1)
          
    })
    .catch( function(err) {
         console.log(err)
          _this.setState({ 
          showHint:false,
        });
    })


  }
  handleChange(event){
    var _this = this;
    _this.setState({
      str: event.target.value,
      showHint:false
    });

    this.callAPIData();
    
  }

  componentWillMount() {
  
  //  this.setState({ mode });
  }

  resetFilter(){
    //e.prevertDefault();
    this.setState({ 
      showHint:false,
      activeBrandID:[],
      activeCatID:[],
      str:""
    });
    this.callAPIData();
  }


  toggleSelection(id,type){

      if(this.state[type].indexOf(id) > -1){
        this.state[type].splice(this.state[type].indexOf(id),1);
      }else{
          this.state[type].push(id);
      }
      var data = {};
      data[type] = this.state[type];
      this.setState(data);
      this.callAPIData();

  }

  
  render() {

    var hintClass = "demo-hint pos-abt z-20 text-center ";
    var addonClass = this.state.showHint ? "zindexplus ":"zindexneg ";
    hintClass += addonClass;
    hintClass += this.state.hideClass;
    var hintImgClass = "pos-abt placeholder-image "+addonClass;

    const opacityOne = {
      opacity : 1
    }

    
    var _this = this;
    return (
       <section id="bg">
         <Heading/>
          <div className="spacer40"></div>
     
     

      <div className="pos-rel z-10">
         <div className="elevation1 pos-rel radius6" id="livedemo" style={opacityOne}>
            
            <div className={hintClass} id="demo-hint" >
                <img src="img/search.png" />
               <h3>Try it now</h3>
               <p> Search for <a onClick = {_this.searchPopular.bind(_this,"Iphone")} href="#">Iphone</a> or <a onClick = {_this.searchPopular.bind(_this,"TV")} href="#">TV</a> </p>
            </div>
            <div className="browser-container pos-rel fill-white" >
               <img src="img/placeholder.svg" className={hintImgClass} id="placeholder-image" /> 
               <header id="demo-header">
                  <div className="header-title pos-abt hidden-xs">
                     <p className="color-white"></p>
                  </div>
                  <div className="pos-rel">
                     <div className="my-search-box my-demo-search-box">
                     <input  id="demo-search-input" ref="searchStringInput"
        onChange={this.handleChange.bind(_this)} type="search" placeholder="Search for products..." value={this.state.str} className="my-search-box--input" /></div>
                     <button className="my-input-reset hidden" value = {_this.state.str} title="Clear the search query." type="reset" > <i className="icon icon-clear color-ghost"></i> </button> 
                  </div>
                  <div className="pos-abt" id="demo-clear-all-refinements">
                     <div >
                        <div className="my-root my-clear-all">
                           <div className="my-body my-clear-all--body">
                              <a onClick = {_this.resetFilter.bind(_this)} className="my-clear-all--link no-decoration color-white my-clear-all--link no-decoration color-white-disabled" href="#">
                                 <div>Clear filters <i className="icon icon-clear"></i></div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </header>
               <aside className="left">
                  <div id="demo-genre">
                     <div>
                        <div className="my-root my-refinement-list">
                           <div className="my-refinement-list--header my-header">Brand</div>
                           <div className="my-body my-refinement-list--body">
                              <div className="my-refinement-list--list">
                                {
                                  _this.state.brands.map(function(elm){

                                      var classItem = _this.state.activeBrandID.indexOf(elm.id) > -1 ? 'itemList itemList__active':'itemList';
                                      return (
                                          <div className={classItem} onClick = {_this.toggleSelection.bind(_this,elm.id,"activeBrandID")}>
                                             <div><span className="fake-checkbox"></span>{elm.name} <span className="pull-right my-refinement-list--count text-xsm fill-athens-gray color-logan">{elm.count}</span></div>
                                         </div>

                                      )
                                  })

                                }
                                 
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="demo-year">
                     <div>
                        <div className="my-root my-refinement-list">
                           <div className="my-refinement-list--header my-header">Category</div>
                           <div className="my-body my-refinement-list--body">
                              <div className="my-refinement-list--list">
                                 {
                                  _this.state.Categories.map(function(elm){
                                      var classItem = _this.state.activeCatID.indexOf(elm.id) > -1 ? ' itemList itemList__active ':' itemList ';
                                      return (
                                          <div className={classItem} onClick = {_this.toggleSelection.bind(_this,elm.id,"activeCatID")}>
                                             <div><span className="fake-checkbox"></span>{elm.name} <span className="pull-right my-refinement-list--count text-xsm fill-athens-gray color-logan">{elm.count}</span></div>
                                         </div>

                                      )
                                  })

                                }
                                 <div><a className="my-show-more my-show-more__inactive">Show more</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </aside>
               <section className="app no-padding">
                  <div id="demo-stats-container">
                     <div>
                        <div className="my-root my-stats">
                           <div className="my-body my-stats--body">
                              <div>
                                 {_this.state.result.length} results found 
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <section className="container no-padding">
                    
                      
                     {
                        _this.state.result.length == 0 && 
                          (
                             <div id="demo-movies-hits">
                              <div class="my-hits my-hits__empty text-center">
                                 <strong class="inline text-md">No results 😣</strong><br/>
                                 Clear all refinements or try an other request..? 
                                 <span class="spacer32"></span>
                              </div>
                              </div>
                              
                          )
                        

                     }
                      
                     <div id="demo-movies-hits" >
                        <div className="my-hits">
                        {

                           this.state.result.map(function(elm){
                            var bgImageIndex = "";
                            if(elm.image){
                              bgImageIndex = elm.image
                            }else{
                               bgImageIndex = (elm.id % 6)+1;
                               bgImageIndex = "img/"+bgImageIndex+".jpg";
                            }
                            
                            var bgImage = {
                              background:'url('+bgImageIndex+')'
                            }
                            return (
                               <div className="my-hits--item">
                                <span className="card-wrapper" >
                                   <div className="card"  id="card_0" style={bgImage}>
                                      <div className="card--year">{elm.brand}</div>
                                      <div class="card--stars fill-white pos-abt color-bunting elevation1">
                                       <span>{elm.price}</span>
                                      </div>
                                      
                                      <div className="card--title">{elm.name}</div>
                                   </div>
                                </span>
                             </div>

                            )
                          })
                        }
                
                           
                        </div>
                     </div>
                     <div className="text-center" id="demo-pagination-container">
                        <div>
                           <ul className="my-pagination">
                              <li className="my-pagination--item my-pagination--item__first my-pagination--item__disabled"><span className="my-pagination--link">«</span></li>
                              <li className="my-pagination--item my-pagination--item__last"><a className="my-pagination--link" aria-label="Last" href="#">»</a></li>
                           </ul>
                        </div>
                     </div>
                  </section>
               </section>
               <aside className="right">
                  <div id="demo-actors">
                     <div>
                        <div className="my-root my-refinement-list">
                           <div className="my-refinement-list--header my-header">Popular Search</div>
                           <div className="my-body my-refinement-list--body">
                              <div className="my-refinement-list--list">
                                 
                                 {
                                  _this.state.popular.map(function(elm){
                                      return (
                                          <div onClick = {_this.searchPopular.bind(_this,elm.name)} className="itemList">
                                            <div> {elm.name}</div>
                                         </div>

                                      )
                                  })

                                }
                                

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </aside>
            </div>
            
         </div>
      </div>
      </section>
    );
  }
}

export default Home;
