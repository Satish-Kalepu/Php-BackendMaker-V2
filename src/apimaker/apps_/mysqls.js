const mysqls =  { data(){ return { s2_meti_wen_dda: false, s2_eman_meti_wen: "", } }, props: ['datafor', 'v','datavar', 'rootdata', 'vars'], mounted: function(){ if( typeof(this.v) != "object" ){ this.v = []; }else if( "length" in this.v == false ){ this.v = []; } }, methods: { s2_ooooooohce: function(s2_vvvvvvvvvv){ if( typeof(s2_vvvvvvvvvv)=="object" ){ console.log( JSON.stringify(s2_vvvvvvvvvv,null,4) ); }else{ console.log( s2_vvvvvvvvvv ); } }, s2_ttttttidda: function(){ this.v.push({ "f": { "t": "T", "v": "field" }, "o": { "t": "T", "v": "Asc" }, }); }, s2_edoneteled: function( k, e ){ if( e.ctrlkey ){ this.v.splice(k,1); }else if( confirm("are you sure?\nctrl+click to avoid prompt") ){ this.v.splice(k,1); } }, getfieldslist: function(){ if( typeof(this.rootdata)=="object" ){ if( 'data' in this.rootdata ){ if( 'schema' in this.rootdata['data'] ){ if( 'fields' in this.rootdata['data']['schema'] ){ return Object.keys(this.rootdata['data']['schema']['fields']['v']).join(","); } } } } return ""; } }, template: `<div> <div v-if="typeof(v)!='object'||v==undefined||v==null" style="margin-left:30px;">vobject error</div> <div v-else style="margin-left:10px;"> <div v-for="vd,vi in v" style="display:flex; column-gap:10px; margin-bottom:5px;" > <div><input type="button" class="btn btn-outline-danger btn-sm" style="padding:0px 5px;" value="X" v-on:click="s2_edoneteled(vi,$event)" ></div> <div style="align-self:flex-start;"> <div title="Fields" data-type="dropdown" data-list="list" v-bind:data-list-values="getfieldslist()" v-bind:data-for="datafor" v-bind:data-var="datavar+':'+vi+':f:v'" >{{ vd['f']['v'] }}</div> </div> <div style="align-self:flex-start;"> <div class="codeline_thing_pop" data-type="dropdown" data-list="list" data-list-values="Asc,Desc" v-bind:data-for="datafor" v-bind:data-var="datavar+':'+vi+':o:v'" title="SQL Sort Order" >{{ vd['o']['v'] }}</div> </div> </div> <div><input class="btn btn-outline-dark btn-sm" style="padding:0px 5px;" type='button' v-on:click="s2_ttttttidda" value='+'></div> </div> </div>` };