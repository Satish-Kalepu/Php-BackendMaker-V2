	<div class="code_line" style="border-bottom:1px solid #bbcccc; margin-bottom:10px;" >
		<div style="font-size:14px; ">Input Object: </div>
		<input_object v-bind:v="s2_eeeeenigne['input_factors']" datafor="engine" datavar="input_factors" viewas="json" allowsub="yes" v-on:edited="s2_detide_srotcaf_tupni"></input_object>
	</div>
	<div v-if="s2_rrrrrorrev" class="alert alert-danger" v-html="s2_rrrrrorrev" ></div>

	<div style="background-color:white;" v-if="s2_segats_wohs" >
		<div style="font-size:14px; border-bottom:1px solid #cdcdcd; margin-bottom:5px; ">Stages of Execution: Develop & derive logical result</div>
		<div style="position:sticky;top:0px;z-index:50;background-color: white; margin-bottom:5px;border-bottom:1px solid #cdcdcd;  " >
			<div id="div_stages_menu" ref="div_stages_menu" style="padding:5px;" >
				<div style="padding:0px 10px; display:inline-block;" >
				Selected <span class="badge bg-secondary" >{{ s2_smeti_dekcehc }}</span>
				</div>
				<template v-if="s2_smeti_dekcehc" >
					<button class="btn btn-outline-dark btn-sm ms-5" type="button" style="line-height: 1.2;" v-on:click="s2_segats_etacilpud" >Copy</button>
					<button class="btn btn-default btn-sm ms-2" type="button" style=" width:30px;line-height: 1.2;line-height: 1;font-weight:bold;color:black;" v-on:click="s2_ppppu_evom" >&#8673;</button>
					<button class="btn btn-default btn-sm ms-2" type="button" style=" width:30px;line-height: 1.2;font-weight:bold;color:black;" v-on:click="s2_nnwod_evom" >&#8675;</button>
					<button class="btn btn-outline-danger btn-sm ms-2" type="button"  style="line-height: 1.2;" v-on:click="s2_segats_eteled" >Delete</button>
					<button class="btn btn-outline-secondary btn-sm ms-2" type="button"  style="line-height: 1.2;" v-on:click="s2_lla_kcehcnu" >Reset</button>
				</template>
			</div>
		</div>

		<div v-for="s2_dddddegats,s2_iiiiiegats in s2_eeeeenigne['stages']" class="myrow1 stageroot" >
			<div class="mycol1" >
				<input type="checkbox" v-bind:disabled="s2_ddekcol_si||s2_dddddegats['t']=='HTMLElementEnd'||s2_dddddegats['t']=='EndIf'||s2_dddddegats['t']=='EndWhile'||s2_dddddegats['t']=='EndForEach'||s2_ssssskcehc[s2_iiiiiegats]['if']" v-model="s2_ssssskcehc[s2_iiiiiegats]['checked']"  v-on:click="s2_dekcilc_meti(s2_iiiiiegats)"  style="width:20px;height:20px;" >
			</div>
			<div class="mycol1" >
				<input type="button" class="btn btn-outline-secondary btn-sm py-0" v-if="s2_smeti_dekcehc==0" value="+" v-on:click="s2_eegats_dda(s2_iiiiiegats)" style="padding:0px 3px;" v-bind:disabled="s2_ddekcol_si" >
			</div>
			<div class="mycol2" style="align-self: stretch;" >
				<div style="width:40px; padding:0px 5px;" align='right'>{{ (s2_iiiiiegats+1) }}</div>
			</div>
			<div class="mycol3" >
				<template v-if="s2_egats_detaerc_tsuj!=s2_iiiiiegats" >
					<div v-if="s2_dddddegats['er']" style=" padding:0px 5px; background-color:#feb9b9;cursor:pointer;color:black;" v-bind:title="s2_dddddegats['er']" v-on:click="s2_trela_egats_wohs(s2_iiiiiegats)">{{ s2_dddddegats['er'] }} </div>
					<div v-if="s2_dddddegats['wr']" style=" padding:0px 5px; background-color:#f4ddb4;cursor:pointer;color:black;" v-bind:title="s2_dddddegats['er']" v-on:click="s2_trela_egats_wohs(s2_iiiiiegats)">{{ s2_dddddegats['wr'] }} </div>
				</template>
				<div class="code_row code_line" v-bind:style="s2_lllevelteg(s2_iiiiiegats)" v-bind:data-stagei="s2_iiiiiegats" >
					<template v-if="s2_dddddegats['e']==false" >
						<div v-if="'vend' in s2_dddddegats" data-list="all" style="padding:0px 10px;" >{{ s2_dddddegats['k']['v'] }}</div>
						<varselect v-else datatype="dropdown" datalist="all" datavar="k" datafor="stages" v-bind:v="s2_dddddegats['k']" v-bind:dataktype="s2_dddddegats['k']['t']"  v-bind:dataplg="s2_dddddegats['k']['plg']" v-bind:vars="s2_esiw_egats_srotcaf_lla[ s2_iiiiiegats ]" ></varselect>
						<template v-if="s2_dddddegats['k']['v']=='Let'" >
							<div class="editable" data-var="d:lhs" data-for="stages" ><div contenteditable data-for="stages" data-type="editable" data-var="d:lhs" data-allow="variable_name" >{{ s2_dddddegats['d']['lhs'] }}</div></div>
							<div> as </div>
							<inputtextbox datafor="stages" v-bind:v="s2_dddddegats['d']['rhs']" datavar="d:rhs" v-bind:vars="s2_esiw_egats_srotcaf_lla[s2_iiiiiegats]" ></inputtextbox>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='LetComponent'" >
							<div class="editable" data-var="d:lhs" data-for="stages" ><div contenteditable data-for="stages" data-type="editable" data-var="d:lhs" data-allow="variable_name" >{{ s2_dddddegats['d']['lhs'] }}</div></div>
							<div> as </div>
							<thing datafor="stages" v-bind:v="s2_dddddegats['d']['rhs']" datavar="d:rhs" v-bind:vars="s2_esiw_egats_srotcaf_lla[s2_iiiiiegats]" ></thing>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='Assign'" >
							<div data-type="dropdown" data-for="stages" data-list="vars" data-var="d:lhs:v:v">{{ s2_dddddegats['d']['lhs']['v']['v'] }}</div>
							<div> = </div>
							<inputtextbox datafor="stages" v-bind:v="s2_dddddegats['d']['rhs']" datavar="d:rhs" v-bind:vars="s2_esiw_egats_srotcaf_lla[s2_iiiiiegats]" ></inputtextbox>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='If'" >
							<div style="display: flex;">
								<div>
									<div v-for="s2_vvvvvvvvfi,s2_iiiiiiiifi in s2_dddddegats['d']['cond']" v-bind:class="{'pt-1':(s2_iiiiiiiifi>0)}" style="display:flex; align-items: flex-start; padding-bottom: 2px;" >
										<div v-if="s2_dddddegats['d']['cond'].length>1" class="px-2">
										<input class="btn btn-secondary btn-sm py-0 px-1" type="button" v-on:click="s2_noitidnoc_fi_eteled(s2_iiiiiegats, s2_iiiiiiiifi)" title="Add Condition" value="X">
										</div>
										<inputtextbox datafor="stages" v-bind:v="s2_vvvvvvvvfi['lhs']" v-bind:datavar="'d:cond:'+s2_iiiiiiiifi+':lhs'" v-bind:vars="s2_esiw_egats_srotcaf_lla[s2_iiiiiegats]"></inputtextbox>
										<div data-type="dropdown" data-for="stages" data-list="roperator" v-bind:data-var="'d:cond:'+s2_iiiiiiiifi+':op'" style="margin:0px 10px; font-weight: bold; text-align: center;">{{ s2_vvvvvvvvfi['op'] }}</div>
										<inputtextbox datafor="stages" v-bind:v="s2_vvvvvvvvfi['rhs']" v-bind:datavar="'d:cond:'+s2_iiiiiiiifi+':rhs'" v-bind:vars="s2_esiw_egats_srotcaf_lla[s2_iiiiiegats]"></inputtextbox>
										<div class="px-2">
											<input v-if="s2_iiiiiiiifi==s2_dddddegats['d']['cond'].length-1" class="btn btn-secondary btn-sm py-0 px-1" type="button" v-on:click="s2_noitidnoc_fi_dda(s2_iiiiiegats)" title="Add Condition" value="+" >
										</div>
									</div>
								</div>
								<div v-if="s2_dddddegats['d']['cond'].length>1" class="px-2">
									<div data-type="dropdown" data-for="stages" data-list="ifop" v-bind:data-var="'d:op'" style="margin:0px 10px; font-weight: 400; text-align: center;">{{ s2_dddddegats['d']['op'] }}</div>
								</div>
							</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='While'" >
							<div style="display: flex; align-items:flex-start;">
								<div style="padding-right:5px;">
									<div v-for="s2_vvvvvvvvfi,s2_iiiiiiiifi in s2_dddddegats['d']['cond']" v-bind:class="{'pt-1':(s2_iiiiiiiifi>0)}"  style="display:flex; align-items: flex-start;" >
										<div v-if="s2_dddddegats['d']['cond'].length>1"  class="px-2">
											<input class="btn btn-secondary btn-sm py-0 px-1" type="button" v-on:click="s2_noitidnoc_fi_eteled(s2_iiiiiegats, s2_iiiiiiiifi)" title="Delete Condition" value="X">
										</div>
										<inputtextbox datafor="stages" v-bind:v="s2_vvvvvvvvfi['lhs']" v-bind:datavar="'d:cond:'+s2_iiiiiiiifi+':lhs'" v-bind:vars="s2_esiw_egats_srotcaf_lla[s2_iiiiiegats]"></inputtextbox>
										<div data-type="dropdown" data-for="stages" data-list="roperator" v-bind:data-var="'d:cond:'+s2_iiiiiiiifi+':op'" style="margin:0px 10px; font-weight: bold; text-align: center;">{{ s2_vvvvvvvvfi['op'] }}</div>
										<inputtextbox datafor="stages" v-bind:v="s2_vvvvvvvvfi['rhs']" v-bind:datavar="'d:cond:'+s2_iiiiiiiifi+':rhs'" v-bind:vars="s2_esiw_egats_srotcaf_lla[s2_iiiiiegats]"></inputtextbox>
										<div class="px-2">
											<input v-if="s2_iiiiiiiifi==s2_dddddegats['d']['cond'].length-1" class="btn btn-secondary btn-sm py-0 px-1" type="button" v-on:click="s2_noitidnoc_fi_dda(s2_iiiiiegats)" title="Add Condition" value="+" >
										</div>
									</div>
								</div>
								<div v-if="s2_dddddegats['d']['cond'].length>1" class="px-2">
									<div data-type="dropdown" data-for="stages" data-list="ifop" v-bind:data-var="'d:op'" style="margin:0px 10px; font-weight: 400; text-align: center;">{{ s2_dddddegats['d']['op'] }}</div>
								</div>
								<div>
									<div style="display:flex;">
										<div>MaxLoops: </div>
										<div class="editable" data-var="d:maxloops" data-for="stages" ><div contenteditable data-for="stages" data-type="editable" data-var="d:maxloops" data-allow="number" >{{ s2_dddddegats['d']['maxloops'] }}</div></div>
									</div>
								</div>
							</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='For'" >
							<div style="display:flex; align-items: flex-start; border-left:1px solid #ccc;border-top:1px solid #ccc;border-right:1px solid #ccc; background-color: #f8f8f8; gap:5px; padding-left:5px; padding-right:5px;">
								<div>
									<div>Start</div>
									<div><inputtextbox2 datafor="stages" v-bind:v="s2_dddddegats['d']['start']" types="N,V" datavar="d:start" v-bind:vars="s2_esiw_egats_srotcaf_lla[s2_iiiiiegats]"></inputtextbox2></div>
								</div>
								<div>
									<div>End</div>
									<div><inputtextbox2 datafor="stages" v-bind:v="s2_dddddegats['d']['end']" types="N,V" datavar="d:end" v-bind:vars="s2_esiw_egats_srotcaf_lla[s2_iiiiiegats]"></inputtextbox2></div>
								</div>
								<div>
									<div>Order</div>
									<div>
										<div class="codeline_thing_pop" data-type="dropdown" data-for="stages" data-list="order" data-var="d:order" >{{ s2_dddddegats['d']['order'] }}</div>
									</div>
								</div>
								<div>
									<div>Modifier</div>
									<div><inputtextbox2 datafor="stages" v-bind:v="s2_dddddegats['d']['modifier']" types="N,V" datavar="d:modifier"  v-bind:vars="s2_esiw_egats_srotcaf_lla[s2_iiiiiegats]"></inputtextbox2></div>
								</div>
								<div>
									<div>As</div>
									<div class="editable" data-var="d:as" data-for="stages" ><div contenteditable data-type="editable" data-var="d:as" data-allow="text" data-for="stages" >{{ s2_dddddegats['d']['as'] }}</div></div>
								</div>
								<div>
									<div>MaxLoops</div>
									<div class="editable" data-var="d:maxloops" data-for="stages" ><div contenteditable data-type="editable" data-var="d:maxloops" data-allow="number" data-for="stages" >{{ s2_dddddegats['d']['maxloops'] }}</div></div>
								</div>
							</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='ForEach'" >
							<div style="display:flex; align-items: flex-start; border:1px solid #ccc; gap:5px; padding-left:5px; padding-right:5px;">
								<div>
									<div>List</div>
									<div><div class="codeline_thing_pop" data-type="dropdown" data-for="stages" data-list="vars" data-var="d:var:v:v" >{{ s2_dddddegats['d']['var']['v']['v'] }}</div></div>
								</div>
								<div> as </div>
								<div>
									<div>Key</div>
									<div class="editable" data-var="d:key"  data-for="stages"><div contenteditable data-type="editable"  data-for="stages" data-var="d:key" data-allow="text" >{{ s2_dddddegats['d']['key'] }}</div></div>
								</div>
								<div>
									<div>Value</div>
									<div class="editable" data-var="d:value"  data-for="stages"><div contenteditable data-type="editable"  data-for="stages" data-var="d:value" data-allow="text" >{{ s2_dddddegats['d']['value'] }}</div></div>
								</div>
							</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='Math'" >
							<div style="display: flex; align-items:flex-start;">
								<div data-type="dropdown" data-for="stages" data-list="vars" v-bind:data-var="'d:lhs:v:v'">{{ s2_dddddegats['d']['lhs']['v']['v'] }}</div>
								<div>&nbsp;&nbsp;=&nbsp;&nbsp; </div>
								<div v-for="md,mi in s2_dddddegats['d']['rhs']" style="display:flex; align-items: flex-start; gap:5px;" >
									<div style="font-size:1.2rem;line-height: 20px;"> ( </div>
									<template v-for="mds,mis in md['m']" >
										<inputtextbox2 data-for="stages" v-bind:v="mds" types="N,V" v-bind:datavar="'d:rhs:'+mi+':m:'+mis" v-bind:vars="s2_esiw_egats_srotcaf_lla[s2_iiiiiegats]"></inputtextbox2>
										<div class="codeline_thing_pop2" data-type="dropdown2" data-for="stages" data-list="operator" v-bind:data-var="'d:rhs:'+mi+':m:'+mis+':OP'">{{ mds['OP'] }}</div>
									</template>
									<div style="font-size:1.2rem;line-height: 20px;"> ) </div>
									<div class="codeline_thing_pop2" data-type="dropdown2" data-for="stages" data-list="operator" v-bind:data-var="'d:rhs:'+mi+':OP'">{{ md['OP'] }}</div>
								</div>
							</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='Expression'" >
							<div style="display: flex; align-items:flex-start;">
								<div data-type="dropdown" data-for="stages" data-list="vars" v-bind:data-var="'d:lhs:v:v'">{{ s2_dddddegats['d']['lhs']['v']['v'] }}</div>
								<div>&nbsp;&nbsp;=&nbsp;&nbsp; </div>
								<div class="editable" data-var="d:rhs:v" data-for="stages" ><div contenteditable data-for="stages" data-type="editable" data-var="d:rhs:v" data-allow="expression" >{{ s2_dddddegats['d']['rhs']['v'] }}</div></div>
								<div class="help-div" doc="expression.html">?</div>
							</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='Function'" >
							<template v-if="s2_dddddegats['d']['return']" >
								<div data-type="dropdown" data-for="stages" data-list="vars" data-var="d:lhs:v:v" style="white-space: nowrap;">{{ s2_dddddegats['d']['lhs']['v']['v'] }}</div>
								<div> = </div>
							</template>
							<div data-type="dropdown" data-for="stages" data-list="functions" data-var="d:fn" data-var-parent="d" style="white-space: nowrap;">{{ s2_dddddegats['d']['fn'] }}</div>
							<template v-if="'inputs' in s2_dddddegats['d']" >
							<template v-if="typeof(s2_dddddegats['d']['inputs'])=='object'" >
							<div class="varsub-inputs" style="margin-left:-5px;">
								<template v-for="fv,fi in s2_dddddegats['d']['inputs']" >
									<div style="min-width:50px;text-align:right;">{{ fv['n'] }}</div>
									<inputtextbox2 datafor="stages" v-bind:v="fv" v-bind:types="fv['types']" v-bind:datavar="'d:inputs:'+fi" v-bind:vars="s2_esiw_egats_srotcaf_lla[ s2_iiiiiegats ]"></inputtextbox2>
								</template>
							</div>
							</template>
							</template>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='FunctionCall'" >
							<div style="display: flex; align-items:flex-start;">
								<div data-type="dropdown" data-for="stages" data-list="vars" v-bind:data-var="'d:lhs:v:v'">{{ s2_dddddegats['d']['lhs']['v']['v'] }}</div>
								<div>&nbsp;&nbsp;=&nbsp;&nbsp; </div>
								<div data-type="dropdown" data-for="stages" data-list="thing" data-thing="Functions" v-bind:data-var="'d:fn:v'">{{ s2_dddddegats['d']['fn']['v']['l']['v'] }}</div>
								<template v-if="'inputs' in s2_dddddegats['d']['fn']['v']" >
								<template v-if="typeof(s2_dddddegats['d']['fn']['v']['inputs'])=='object'" >
								<div class="varsub-inputs" style="">
									<template v-for="fv,fi in s2_dddddegats['d']['fn']['v']['inputs']['v']" >
										<div style="min-width:50px;text-align:right;">{{ fi }}</div>
										<inputtextbox datafor="stages" v-bind:v="fv" v-bind:datavar="'d:fn:v:inputs:v:'+fi" v-bind:vars="s2_esiw_egats_srotcaf_lla[ s2_iiiiiegats ]"></inputtextbox>
									</template>
								</div>
								</template>
								</template>
							</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='Respond'" >
							<div>
								<pre title="Object or Associative List" data-type="objecteditable" editable-type="O" data-for="stages" data-var="d:v" style="margin-bottom:5px;" >{{ s2_noitaton_tcejbo_teg(s2_dddddegats['d']['v']) }}</pre>
								<div>End Execution</div>
							</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='RespondJSON'" >
							<div>
								<div style="display:flex; column-gap:5px;">
									<div>JSON</div>
									<pre title="Object or Associative List" data-type="objecteditable" editable-type="O" data-for="stages" data-var="d:output:v" style="margin-bottom:5px;" >{{ s2_noitaton_tcejbo_teg(s2_dddddegats['d']['output']['v']) }}</pre>
								</div>
								<div style="display:flex; column-gap:5px;">
									<div>Indent</div>
									<div title="JSON Indent" data-type="dropdown" data-for="stages" data-var="d:pretty:v" data-list="boolean"  style="margin-bottom:5px;" >{{ s2_dddddegats['d']['pretty']['v'] }}</div>
								</div>
								<div>End Execution</div>
							</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='RespondVar'" >
							<div>
								<div style="display:flex; column-gap:5px;">
									<div>Variable</div>
									<div title="Variable" data-type="dropdown" data-for="stages" data-var="d:output:v:v" data-list="vars"  style="margin-bottom:5px;" >{{ s2_dddddegats['d']['output']['v']['v'] }}</div>
								</div>
								<div>End Execution</div>
							</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='RespondXML'" >
							<div>
								<div style="display:flex;">
									<div>XML</div>
									<pre title="Object or Associative List" data-type="objecteditable" editable-type="O" data-for="stages" data-var="d:output:v" style="margin-bottom:5px;" >{{ s2_noitaton_tcejbo_teg(s2_dddddegats['d']['output']['v']) }}</pre>
								</div>
								<div style="display:flex;">
									<div>Indent</div>
									<div title="JSON Indent" data-type="dropdown" data-for="stages" data-var="d:pretty:v" data-list="boolean"  style="margin-bottom:5px;" >{{ s2_dddddegats['d']['pretty']['v'] }}</div>
								</div>
								<div>End Execution</div>
							</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='AddHTML'" >
							<div>
								<inputtextbox2 datafor="stages" v-bind:v="s2_dddddegats['d']" types="T,TT,HT,V" v-bind:datavar="'d'" v-bind:vars="s2_esiw_egats_srotcaf_lla[ s2_iiiiiegats ]"></inputtextbox2>
							</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='RenderHTML'" >
							<pre title="HTML Text" data-type="objecteditable" editable-type="HT" data-for="stages" data-var="d:html:v" style="margin-bottom:5px;" >{{ s2_dddddegats['d']['html']['v'] }}</pre>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='RespondError'" >
							<div>
								<pre title="Object or Associative List" data-type="objecteditable" editable-type="O" data-for="stages" data-var="d:v" style="margin-bottom:5px;" >{{ s2_noitaton_tcejbo_teg(s2_dddddegats['d']['v']) }}</pre>
								<div>End Execution</div>
							</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='Log'" >
							<div><pre title="Object or Associative List" data-type="objecteditable" editable-type="O" data-for="stages" data-var="d:v" style="margin-bottom:5px;" >{{ s2_noitaton_tcejbo_teg(s2_dddddegats['d']['v']) }}</pre></div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='SetLabel'" >
							<inputtextbox2 datafor="stages" v-bind:v="s2_dddddegats['d']" datavar="d" types="T" v-bind:vars="s2_esiw_egats_srotcaf_lla[ s2_iiiiiegats ]"></inputtextbox2>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='JumpToLabel'" >
							<div data-type="dropdown" data-for="stages" data-list="labels" data-var="d:v" >{{ s2_dddddegats['d']['v'] }}</div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='Sleep'" >
							<div class="editable" data-var="d:v" data-for="stages"><div contenteditable data-for="stages" data-type="editable" data-var="d:v" data-allow="number" >{{ s2_dddddegats['d']['v'] }}</div></div>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='MongoDb'" >
							<mongodbv1 v-bind:ref="'stage_'+s2_iiiiiegats+'_comp'"  v-bind:refname="'stage_'+s2_iiiiiegats+'_comp'"  datafor="stages" v-bind:v="s2_dddddegats['d']" datavar="d"  v-bind:vars="s2_esiw_egats_srotcaf_lla[ s2_iiiiiegats ]" v-on:updated="s2_noitpo_detadpu"  ></mongodbv1>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='MySql'" >
							<mysqldbv1 v-bind:ref="'stage_'+s2_iiiiiegats+'_comp'"  v-bind:refname="'stage_'+s2_iiiiiegats+'_comp'"  datafor="stages" v-bind:v="s2_dddddegats['d']" datavar="d"  v-bind:vars="s2_esiw_egats_srotcaf_lla[ s2_iiiiiegats ]" v-on:updated="s2_noitpo_detadpu"  ></mysqldbv1>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='HTTPRequest'" >
							<httprequest v-bind:ref="'stage_'+s2_iiiiiegats+'_comp'"  v-bind:refname="'stage_'+s2_iiiiiegats+'_comp'"  datafor="stages" v-bind:v="s2_dddddegats['d']" datavar="d" v-bind:vars="s2_esiw_egats_srotcaf_lla[ s2_iiiiiegats ]" v-on:updated="s2_noitpo_detadpu" ></httprequest>
						</template>
						<template v-if="s2_dddddegats['k']['v']=='Internal-Table'" >
							<internal_table v-bind:ref="'stage_'+s2_iiiiiegats+'_comp'"  v-bind:refname="'stage_'+s2_iiiiiegats+'_comp'"  datafor="stages" v-bind:v="s2_dddddegats['d']" datavar="d"  v-bind:vars="s2_esiw_egats_srotcaf_lla[ s2_iiiiiegats ]" v-on:updated="s2_noitpo_detadpu"  ></internal_table>
						</template>
						<div v-if="s2_dddddegats['k']['v']=='Dynamic-Table'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Elastic-Tabl'" >Yet to Implement</div>						
						<div v-if="s2_dddddegats['k']['v']=='APICall'" class="text-danger" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='wkHtmlToPdf'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='AWS'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='GCP'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Azure'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='AirTable'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Facebook'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Whatsapp'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Telegram'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Slack'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Jira'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='GoogleMaps'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Celery'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='AMPq'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='RabbitMQ'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Swagger'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Stripe'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Paypal'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='CCAvenue'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='RazorPay'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='PayU'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='BillDesk'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Paytm'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='DynamoDb'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Redis'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='MSSql'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='Cassandra'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='SQLite'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='FireBase'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='FireStore'" >Yet to Implement</div>
						<div v-if="s2_dddddegats['k']['v']=='BigQuery'" >Yet to Implement</div>
					</template>
				</div>
			</div>
		</div>
		<div class="myrow1" >
			<div class="mycol1" >&nbsp;</div>
			<div class="mycol1" >
				<input type="button" class="btn btn-outline-dark btn-sm py-0"   v-if="s2_smeti_dekcehc==0" value="+" v-on:click="s2_eegats_dda('last')" style="padding:0px 3px;" v-bind:disabled="s2_ddekcol_si" >
			</div>
			<div class="mycol23" >&nbsp;</div>
		</div>
		<div style="clear:both;"></div>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<pre>{{ s2_eeeeenigne['output'] }}</pre>
		<?php if( $_GET['show']=="debug" ){ ?>
			<p><B>Debug</b></p>
			<pre>{{ s2_snoitpo_noitcnuf_nigulp }}</pre>
			<p>Engine:</p>
			<pre v-text="s2_eeeeenigne"></pre>
			<pre v-text="s2_nnnoitcnuf"></pre>
			<pre v-text="s2_esiw_egats_srotcaf_lla"></pre>
			<p>Test:</p>
			<pre v-if="s2_wweiv_nosj" v-text="s2_tttttttset"></pre>
		<?php } ?>
	</div>

	<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>

