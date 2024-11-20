const inputtextbox2 = { data(){return{ types_: [], }}, props: ["datafor", "datavar", "v", "types", "dataplg", "dataktype"], mounted: function(){ if( this.datafor == undefined){ this.datafor = "stages"; } if( 'types' in this ){ if( typeof(this.types) == "object" ){ if( "length" in this.types ){ console.log( "types alread split" ); this.types_ = this.types; }else{ console.log( "types Incorrect: " ); console.log( this.types ); } }else if( typeof(this.types) == "string" ){ try{ this.types_ = this.types.split(","); }catch(e){ console.log("inputtextbox2 types not found"); console.log( this.types ); console.log( this.datavar ); } } }else{ console.log("inputtextbox2 types not found") } }, methods:{ text_to_html: function(v){ v = v.replace( /\>/g,  "&gt;" ); v = v.replace( /\</g,  "&lt;" ); return v; }, s2_noitaton_tcejbo_teg( v ){ var vv = {}; if( typeof(v)=="object" ){ if( "length" in v == false ){ for(var k in v ){ if( v[k]['t'] == "V" ){ vv[ k ] = "Variable["+v[k]['v']['v']+"]"; if( 'vs' in v[k]['v'] ){ if( v[k]['v']['vs'] ){  if( v[k]['v']['vs']['v'] ){  vv[ k ] = vv[ k ] + '->' + v[k]['v']['vs']['v'];  } } } }else{ vv[ k ] = this.s2_eulav_evired(v[k]); } } }else{ console.error("get_object_notation: not a object "); this.s2_ooooooohce( v ); } }else{ console.error("get_object_notation: incorrect type: "+ typeof(v) ); } return Object.fromEntries(Object.entries(vv).sort()); }, s2_noitaton_tsil_teg( v ){  var vv = []; if( typeof(v)=="object" ){ if( "length" in v ){ for(var k=0;k<v.length;k++ ){ if( v[k]['t'] == "V" ){ nv = "Variable["+v[k]['v']['v']+"]"; if( 'vs' in v[k]['v'] ){ if( v[k]['v']['vs'] ){  if( v[k]['v']['vs']['v'] ){  nv = nv + '->' + v[k]['v']['vs']['v'];  } } } vv.push(nv); }else{ vv.push( this.s2_eulav_evired(v[k]) ); } } }else{ console.error("get_list_notation: not a list "); } }else{ console.error("get_list_notation: incorrect type: "+ typeof(v) ); } return vv; }, s2_eulav_evired: function(v ){ if( v['t'] == "T" || v['t'] == "TT" ||  v['t'] == "HT" || v['t']== "D" ){ return v['v'].toString(); }else if( v['t']== "N" ){ return Number(v['v']); }else if( v['t'] == 'O' ){ return this.s2_noitaton_tcejbo_teg(v['v']); }else if( v['t'] == 'L' ){ return this.s2_noitaton_tsil_teg(v['v']); }else if( v['t'] == 'NL' ){ return null; }else if( v['t'] == 'B' ){ return (v['v']?true:false); }else if( v['t'] == 'DT' ){ return (v['v']['v'] + " " + v['v']['tz']).toString(); }else if( v['t'] == 'D' || v['t'] == 'TS' ){ return (v['v']).toString(); }else if( v['t'] == 'D' || v['t'] == 'DT' || v['t'] == 'TS' ){ return (v['v']).toString(); }else{ return "unknown: "+ v['t']; } }, s2_noitaton_yreuq_bdognom_teg( v ){  var vv = {}; if( typeof(v)=="object" ){ if( "length" in v){ for(var k=0;k<v.length;k++){ if( v[k]['c']['v'] == "==" || v[k]['c']['v'] == "=" ){ v[k]['c']['v'] = '$eq'; } if( v[k]['v']['t'] == "V" ){ vv[ v[k]['f']['v']+'' ] = {}; if( v[k]['v']['v']['t'] == "T" ){ vv[ v[k]['f']['v']+'' ][ v[k]['c']['v']+'' ] = v[k]['v']['t']+"["+v[k]['v']['v']['v']+']'; }else{ vv[ v[k]['f']['v']+'' ][ v[k]['c']['v']+'' ] = v[k]['v']['t']+"["+v[k]['v']['v']['v']+"]"; } }else if( v[k]['v']['t'] == "L" && ( v[k]['f']['v'] == '$and' || v[k]['f']['v'] == '$or' ) ){ vv[ v[k]['f']['v']+'' ] = []; for(var j=0;j<v[k]['v']['v'].length;j++){ vv[ v[k]['f']['v']+'' ].push( this.s2_noitaton_yreuq_bdognom_teg(v[k]['v']['v'][j]['v']) ); } }else{ vv[ v[k]['f']['v']+'' ] = {}; if( v[k]['c']['v'] == '$eq' ){ vv[ v[k]['f']['v']+'' ] = this.s2_eulav_evired(v[k]['v']); }else{ vv[ v[k]['f']['v']+'' ][ v[k]['c']['v']+''] = this.s2_eulav_evired(v[k]['v']); } } } }else{ console.error("s2_noitaton_yreuq_teg: not a objectxx "); this.s2_ooooooohce( v); } }else{ console.error("s2_noitaton_yreuq_teg: incorrect type: "+ typeof(v) ); } return Object.fromEntries(Object.entries(vv).sort()); }, s2_noitaton_erehw_lqsym_teg( v, ind = "" ){ var vv = []; if( typeof(v)=="object" ){ if( "length" in v ){ for(var k=0;k<v.length;k++){ if( v[k]['c']['v'] == "==" ){ v[k]['c']['v'] = "="; } if( v[k]['v']['t'] == "V" ){ if( v[k]['v']['v']['t'] == "T" ){ vv.push( "`" + v[k]['f']['v'] + "` "+v[k]['c']['v']+" \""+ v[k]['v']['t']+"["+v[k]['v']['v']['v']+"]\"" ); }else{ vv.push( "`" + v[k]['f']['v'] + "` "+v[k]['c']['v']+" "+ v[k]['v']['t']+"["+v[k]['v']['v']['v']+"]" ); } }else if( v[k]['v']['t'] == "L" ){ vv.push( "(\n"+ind+"   " + this.s2_erehw_eulav_lqsym_evired(v[k]['v'], ind) + " \n"+ind+")" ); }else{ vv.push( "`" + v[k]['f']['v'] +"` "+v[k]['c']['v']+" "+this.s2_erehw_eulav_lqsym_evired(v[k]['v'], ind) ); } if( k < v.length - 1 ){ vv.push( "\n" + ind + v[k]['n']['v'] ); } } }else{ console.error("get_where_notation: not a object "); this.s2_ooooooohce( v); } }else{ console.error("get_where_notation: incorrect type: "+ typeof(v) ); } return vv.join(" "); }, s2_erehw_eulav_lqsym_evired: function( v, ind = ""){ if( v['t'] == "T" || v['t'] == "TT" ||  v['t'] == "HT" || v['t']== "D" ){ return '"'+ v['v'].toString() + '"'; }else if( v['t']== "N" ){ return Number(v['v']); }else if( v['t'] == 'O' ){ return "'Error[Incorrect Type O]'"; }else if( v['t'] == 'L' ){ return this.s2_noitaton_erehw_lqsym_teg(v['v'], ind+"   "); }else if( v['t'] == 'NL' ){ return "null"; }else if( v['t'] == 'B' ){ return (v['v']?"true":"false"); }else if( v['t'] == 'DT' ){ return '"' + (v['v']['v'] + " " + v['v']['tz']).toString() + '"'; }else if( v['t'] == 'D' || v['t'] == 'TS' ){ return '"' + (v['v']).toString() + '"'; }else if( v['t'] == 'D' || v['t'] == 'DT' || v['t'] == 'TS' ){ return '"' + (v['v']).toString() + '"'; }else{ return "unknown: "+ v['t']; } }, }, template:`<div v-bind:class="'codeline_thing codeline_thing_'+v['t']" > <div v-if="types_.length!=1" class="codeline_thing_pop" data-type="dropdown2" data-list="datatype" v-bind:data-list-filter="types" v-bind:data-for="datafor" v-bind:data-var="datavar+':t'"  >{{ v['t'] }}</div> <div v-if="v['t']=='V'" title="Variable" data-type="dropdown" data-list="vars" v-bind:data-for="datafor" v-bind:data-var="datavar+':v:v'" v-bind:data-k-type="dataktype" v-bind:data-plg="dataplg" >{{ v['v']['v'] }}</div> <div v-else-if="v['t']=='TI'" style="display:flex; gap:10px; " > <div style="display:flex; border:1px solid #999; padding:3px;" > <div>Id:</div> <div title="Thing ID" class="editable" v-bind:data-for="datafor" v-bind:data-var="datavar+':v:i'" ><div contenteditable spellcheck="false" data-type="editable" v-bind:data-for="datafor" v-bind:data-var="datavar+':v:i'" v-bind:id="datavar+':v:i'" v-bind:data-allow="text" >{{ v['v']['i'] }}</div></div> </div> <div style="display:flex; border:1px solid #999; padding:3px;" > <div>Label:</div> <div title="Thing Label" class="editable" v-bind:data-for="datafor" v-bind:data-var="datavar+':v:l'" ><div contenteditable spellcheck="false" data-type="editable" v-bind:data-for="datafor" v-bind:data-var="datavar+':v:l'" v-bind:data-allow="text" >{{ v['v']['l'] }}</div></div> </div> </div> <div v-else-if="v['t']=='TH'" style="display:flex; gap:10px; " > <div v-if="'thfixed' in v==false" title="Thing" data-type="dropdown" data-list="things" v-bind:data-for="datafor" v-bind:data-var="datavar+':v:th'" v-bind:data-k-type="dataktype" v-bind:data-plg="dataplg" >{{ v['v']['th'] }}</div> <div title="ThingItem" data-type="dropdown" data-list="thing" v-bind:data-thing="v['v']['th']" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'" v-bind:data-k-type="dataktype" v-bind:data-plg="dataplg"  >{{ v['v']['l']['v'] }}</div> </div> <div v-else-if="v['t']=='THL'" placeholder="Thing Name" title="Thing List Name" class="editable" v-bind:data-var="datavar+':v:th'" v-bind:data-for="datafor" ><div placeholder="Thing Name" contenteditable spellcheck="false" data-type="editable" v-bind:data-for="datafor" v-bind:data-var="datavar+':v:th'" data-allow="T" >{{ v['v']['th'] }}</div></div> <div v-else-if="v['t']=='TH'" title="Thing" data-type="dropdown" data-list="things" v-bind:data-thing="v['v']['th']" v-bind:data-for="datafor" v-bind:data-var="datavar+':v:v'" v-bind:data-k-type="dataktype" v-bind:data-plg="dataplg" >{{ v['v']['v']['l'] }}</div> <div v-else-if="v['t']=='T'" title="Text" class="editable" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'" ><div contenteditable spellcheck="false" data-type="editable" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'" v-bind:id="datavar+':v'" v-bind:data-allow="v['t']"  >{{ v['v'] }}</div></div> <pre v-else-if="v['t']=='TT'" title="Multiline Text" data-type="objecteditable"  editable-type="TT" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'" style="margin-bottom:5px;" >{{ v['v'] }}</pre> <pre v-else-if="v['t']=='HT'" title="Html Text" data-type="objecteditable"editable-type="HT" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'" style="margin-bottom:5px;" >{{ v['v'] }}</pre> <div v-else-if="v['t']=='N'" title="Number" class="editable" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'" ><div contenteditable spellcheck="false" data-type="editable" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'" v-bind:data-allow="v['t']" >{{ v['v'] }}</div></div> <pre v-else-if="v['t']=='L'" title="Object List" data-type="objecteditable" editable-type="L" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'" style="margin-bottom:5px;" >{{ s2_noitaton_tsil_teg(v['v']) }}</pre> <pre v-else-if="v['t']=='O'" title="Object or Associative List" data-type="objecteditable" editable-type="O" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'" style="margin-bottom:5px;" >{{ s2_noitaton_tcejbo_teg(v['v']) }}</pre> <pre v-else-if="v['t']=='MongoQ'" title="MongoDb Query" data-type="objecteditable" editable-type="MongoQ" editable-title="MongoDB Query JSON" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'"  style="margin-bottom:0px;" >{{ s2_noitaton_yreuq_bdognom_teg(v['v']) }}</pre> <pre v-else-if="v['t']=='MysqlQ'" title="Mysql Where Condition" data-type="objecteditable" editable-type="MysqlQ" editable-title="MYSQL where condition" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'"  style="margin-bottom:0px;" >{{ s2_noitaton_erehw_lqsym_teg(v['v']) }}</pre> <pre v-else-if="v['t']=='DBCondObject'" title="Database Condition Object" data-type="objecteditable" editable-type="DBCondObject" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'" style="margin-bottom:5px;">{{ s2_noitaton_tcejbo_dnocbd_teg(v['v']) }}</pre> <div v-else-if="v['t']=='B'" title="Boolean" data-type="dropdown" data-list="boolean" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'" >{{ v['v'] }}</div> <div v-else-if="v['t']=='D'" title="Date" data-type="popupeditable" v-bind:data-for="datafor" editable-type="d" v-bind:data-var="datavar+':v'" style="border:1px solid #888; padding:0px 5px;cursor:pointer;" >{{ v['v'] }}</div> <div v-else-if="v['t']=='DT'" title="DateTime" data-type="popupeditable" v-bind:data-for="datafor" editable-type="dt" v-bind:data-var="datavar+':v'" style="border:1px solid #888; padding:0px 5px;cursor:pointer;" >{{ v['v']['v'] }} {{ v['v']['tz'] }}</div> <div v-else-if="v['t']=='TS'" title="Unix TimeStamp" data-type="popupeditable" v-bind:data-for="datafor" editable-type="ts" v-bind:data-var="datavar+':v'" style="border:1px solid #888; padding:0px 5px;cursor:pointer;" >{{ v['v'] }}</div> <div v-else-if="v['t']=='NL'" title="Null" ></div> <div v-else v-bind:title="v['t']" data-type="dropdown" v-bind:data-list="v['t']" v-bind:data-for="datafor" v-bind:data-var="datavar+':v'"  v-bind:data-k-type="dataktype" v-bind:data-plg="dataplg"  >{{ v['v'] }}</div> <div v-if="types_.indexOf(v['t'])==-1" style='color:red;' >Type not allowed{{ v['t'] }} {{ types_ }}</div> </div>` };