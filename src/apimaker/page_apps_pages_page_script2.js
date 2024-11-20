	this.inside_app__ = Vue.createApp({
		data: function(){return {
			frame: global_frame,
			parent_app: false,
			shwoit: false,
			enabled: true,
			target_editor_id: "editor_div",
			focuselement: false,
			focusid: "",
			focustree: [],
			elements: {},
			clipboards: [],
			showpop: true,
			vpop_pos: false,
			vpop_style: "",
			vpop_style2: "",
			vm_settings_panel_style: "top:100px;right:10px;",
			section_options_vid: "",
			vcords: [],
			vcord: {},
			vmousestart: false,
			vmx:-1,vmy:-1,vmx2:-1,vmy2:-1,
			vtopel: false,
			insel: false,
			vpop1_show_options: false,
			createMenu_t: -1,
			selection_t: -1,

			selection_start: false,

			sections_selected: false,
			sections_copied: [],
			sections_list: [],
			sections_is_all_lis: false,
			showtoolbar: false,
			vm: "",
			vm_parent: false,
			vmtype: "",
			vmblocktype: "",
			vml: "visibility: hidden;", vmr: "visibility: hidden;", vmt:"visibility: hidden;", vmb:"visibility: hidden;", vmtip: "visibility: hidden;",
			vmttt: "visibility: hidden;",
			vmover: false,
			is_vm_selected: false,
			is_vm_in_note: false,
			is_vm_in_quote: false,
			is_vm_in_td: false,
			is_vm_in_li: false,
			table_menus: {},
			add_menu: false,
			add_menu_all: false,
			add_menu_style: "",
			add_menu_style2: "",
			add_menu_pos: "",
			td_add_menu: false,
			td_add_menu_style: "",
			td_add_menu_style2: "",
			td_pos: "",
			li_pos: "",
			li_add_menu: false,
			li_add_menu_style: "",
			li_add_menu_style2: "",
			td_cell_delete_menu: false,
			td_cell_delete_menu_style: "",
			td_cell_delete_menu_style2: "",
			settings_menu: false,
			show_toolbar: false,
			settings_menu_style: "",
			editor_toolbar_style: "",
			editore: false,
			td_settings: {
				"wt": "a", //a=auto,s=specific
				"v": "", //value
				"u": "px",
				"align": "left",
				"wrap": "yes",
			},
			table_settings: {
				"border": "a", //border a,b,c
				"striped": "no", //striped 0,1
				"spacing": "2", //padding 1,2,3,4
				"hover": "no", //hover
				"theme": "none",
				"width": "auto", // auto,full
				"colwrap": "yes",
				"header": "no",
				"colheader": "no",
				"mheight": "none",
				"overflow": "auto",
			},
			ul_type: "disc",
			ul_types: {
				"list-style-disc": "list-style-disc",
				"list-style-square": "list-style-square",
				"list-style-circle": "list-style-circle",
				"list-style-decimal": "list-style-decimal",
				"list-style-decimal-leading": "list-style-decimal-leading",
				"list-style-lower-alpha": "list-style-lower-alpha",
				"list-style-lower-greek": "list-style-lower-greek",
				"list-style-lower-latin": "list-style-lower-latin",
				"list-style-lower-roman": "list-style-lower-roman",
				"list-style-upper-alpha": "list-style-upper-alpha",
				"list-style-upper-greek": "list-style-upper-greek",
				"list-style-upper-latin": "list-style-upper-latin",
				"list-style-upper-roman": "list-style-upper-roman",
			},
			quotetype: "block_quote_small",
			notetype: "block_note_info",
			note_types: {
				"block_note_info": "Info",
				"block_note_alert": "Alert",
				"block_note_caution": "Caution",
				"block_note_dark": "Dark",
			},
			pre_edit_popup: false,
			pre_text: "",
			pre_style: "",
			anchor_menu: false,
			anchor: false,
			anchor_at_range: false,
			anchor_href: "",
			anchor_text: "",
			anchor_menu_style: "",
			anchor_form: false,
			image_popup:false,
			image_at:false,
			image_at_pos: "t",
			image_url: "",
			image_blob: "",
			image_type: "browse",//browse,gallery
			image_linktype: 'ext',
			image_message: '',
			image_caption: false,
			image_caption_txt: "",
			image_id: "",
			image_vm: false,
			image_popup_style: "",
			image_popup_tab: 'upload',
			image_mode: 'create', //edit
			image_inline_menu: false,
			image_inline_menu_style: "",
			image_inline_mode: 'default',
			image_inline_caption: 'yes',
			image_inline_size: 'large',
			image_inline_sizef: 'small',
			image_temp_randid: "",
			vtables: {},
			td_sel_start: false,
			td_sel_show: false,
			td_sel_start_tr: -1,
			td_sel_start_td: -1,
			td_sel_end_tr: -1,
			td_sel_end_td: -1,
			td_sel_cells: [],
			td_sel_cnt: 0,
			vm_table: false,
			vm_id: false,
			temp_save_show: false,
			save_queue: {},
			save_queue2: [],
			save_recent_live: -1,
			save_busy: false,
			image_crop_popup: false,
			image_crop_popup_style: false,
			links: [],
			link_suggest: false,
			link_suggest_list: [],
			link_suggest_style: "",
			doc_error: "",
			paste_shift: false,

			focused: false,
			focused_type: "",
			focused_block_type: "",
			focused_block: false,
			focused_table: false,
			focused_anchor: false,
			focused_td: false,
			focused_tr: false,
			focused_li: false,
			focused_ul: false,
			focused_img: false,

			contextmenu: false,
			contextmenu_style: "",

			menu_tb_col: false,
			menu_tb_row: false,
			menu_tb_table: false,
			menu_tb_sel: false,
			menu_submenu_style: "",

			history: {},
			history_docs: [],
			history_popup: false,
			history_body: "",

		};},
		mounted: function(){
			console.log("editorinit" + this.target_editor_id);
			var vl = this.frame.document.getElementById(this.target_editor_id);
			console.log( vl );
			vl.setAttribute("spellcheck","false");
			vl.setAttribute("data-id", "root");
			vl.setAttribute("draggable", "false");
			vl.setAttribute("contenteditable", "true");
			//vl.addEventListener("click", this.clickit, true );
			vl.addEventListener("dragover", function(e){console.log("dragover");e.preventDefault();e.stopPropagation();});
			vl.addEventListener("drop", this.drop_event,true);
			vl.addEventListener("click", this.clickit,true);
			vl.addEventListener("paste", this.onpaste,true);
			vl.addEventListener("keydown", this.keydown,true);
			vl.addEventListener("contextmenu", this.contextmenu_event, true);
			vl.addEventListener("keyup", this.keyup,true);
			vl.addEventListener("mousedown", this.this_mousedown,true);
			vl.addEventListener("mouseup", this.this_mouseup,true);
			vl.addEventListener("mousemove", this.this_mousemove,true);
			setTimeout(this.initialize_events,500);
			setTimeout(this.initialize_tables,500);
		},
		methods: {

			show_history_popup: function(){
				this.history_popup = true;
				this.history_body = this.history_docs[ this.history_docs.length - 1 ]['doc']+'';
			},

			show_history_version: function(e){
				this.history_body = this.history_docs[ this.history_docs.length - Number(e.target.value) ]['doc']+'';
			},
			history_load: function(){
				this.gt(this.target_editor_id).innerHTML = this.history_body+'';
				this.history_popup = false;
				this.history_docs.push({
					"t": Number( (new Date()).getTime() ),
					"doc": this.history_body+''
				});
				this.history_body = '';
			},

			select_element_text: function( v ){
				var s = new Range();
				s.setStart(v.childNodes[0],0);
				var ve = v.lastChild;
				if( ve.nodeName == "#text" ){
					s.setEnd( ve, ve.data.length );
				}else{
					s.setEnd( ve, ve.childNodes.length );
				}
				this.frame.document.getSelection().removeAllRanges();
				this.frame.document.getSelection().addRange(s);
			},
			select_range_with_element: function( v ){
				var s = new Range();
				s.setStart(v,0);
				s.setEnd(v, v.childNodes.length);
				this.frame.document.getSelection().removeAllRanges();
				this.frame.document.getSelection().addRange(s);
			},
			range_select_full_nodes: function(){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				if( sr.startContainer.nodeName == "#text" ){
					if( sr.startContainer.parentNode.nodeName.match(/^(B|I|EM|STRONG)$/) ){
						sr.setStartBefore( sr.startContainer.parentNode );
					}
				}
				if( sr.endContainer.nodeName == "#text" ){
					if( sr.endContainer.parentNode.nodeName.match(/^(B|I|EM|STRONG)$/) ){
						sr.setEndAfter( sr.endContainer.parentNode );
					}
				}
				//return false;
				var sr = this.frame.document.getSelection().getRangeAt(0);
				const nodeIterator = this.frame.document.createNodeIterator(
					sr.commonAncestorContainer,NodeFilter.SHOW_ALL,(node) => {return NodeFilter.FILTER_ACCEPT;}
				);
				var nodelist = [];
				var s = false;
				while (currentnode = nodeIterator.nextNode()) {
					if( currentnode == sr.startContainer ){
						s = true;
					}
					if( s ){
						if( currentnode.nodeName.match( /^(B|STRONG|EM|I)$/ ) ){
							nodelist.push( currentnode );
						}
					}
					if( currentnode == sr.endContainer ){break;}
				}
				while( nodelist.length ){
					var v = nodelist.pop();
					v.outerHTML = v.innerHTML;
				}
			},
			set_focus_at: function( v ){
				var s = new Range();
				s.setStart(v,1);
				s.setEnd(v, 1);
				this.frame.document.getSelection().removeAllRanges();
				this.frame.document.getSelection().addRange(s);
			},


			select_elements: function(v){
				var sr = new Range();
				sr.setStart( v[0], 0 );
				var ve = v[v.length-1];
				sr.setEnd( ve, ve.childNodes.length );
				var sel = this.frame.document.getSelection();
				sel.removeAllRanges();
				sel.addRange(sr);
			},
			select_sections: function(v){
				var sr = new Range();
				sr.setStart( v[0], 0 );
				var ve = v[v.length-1];
				sr.setEnd( ve, ve.childNodes.length );
				var sel = this.frame.document.getSelection();
				sel.removeAllRanges();
				sel.addRange(sr);
			},
			contextmenu_hide: function( v ){
				this.contextmenu = false;
				this.menu_tb_col = false;
				this.menu_tb_row = false;
				this.menu_tb_table = false;
			},
			contextmenu_open: function( v ){
				this.menu_tb_col = false;
				this.menu_tb_row = false;
				this.menu_tb_table = false;
				if( v == "tb_col" ){
					this.menu_tb_col = true;
				}
				if( v == "tb_row" ){
					this.menu_tb_row = true;
				}
				if( v == "tb_table" ){
					this.menu_tb_table = true;
				}
				this.menu_submenu_style = "top:-40px;left: 100px;";
				setTimeout(this.contextmenu_pos,100,v);
			},
			contextmenu_pos: function( v ){
				if( v == "tb_col" ){
					var s = this.frame.document.getElementsByClassName("contextmenu_col")[0];
				}
				if( v == "tb_row" ){
					var s = this.frame.document.getElementsByClassName("contextmenu_row")[0];
				}
				if( v == "tb_table" ){
					var s = this.frame.document.getElementsByClassName("contextmenu_table")[0];
				}
				if( s ){
					var r = s.getBoundingClientRect();
					var sy = Number(window.scrollY);
					sy = 0;
					//this.menu_submenu_style = "top:-40px;left: 100px;";
				}
			},
			contextmenu_event: function(e){
				e.preventDefault();
				var v = e.target;
				if( v.nodeName == "#text" ){
					v = v.parentNode;
				}
				var r = new Range();
				r.setStart( v, 0);
				r.setEnd( v, 0 );
				this.frame.document.getSelection().removeAllRanges();
				this.frame.document.getSelection().addRange(r);
				this.set_focused( e.target );
				this.contextmenu = true;
				this.contextmenu_set_style(v);
			},
			contextmenu_set_style: function(v){
				var r = v.getBoundingClientRect();
				var s = Number(window.scrollY);

				this.contextmenu_style = "top:"+(Number(r.bottom)+s)+"px;left:"+(Number(r.left)+20)+"px";
			},
			this_mousedown: function(e){
				this.set_focused( e.target );
				if( e.buttons == 2 ){
					e.preventDefault();
					e.stopPropagation();
				}else{
					this.sections_list = [];
					this.sections_selected = false;
				}
			},
			this_mousemove: function(e){
				if( e.buttons == 1 ){
					this.selection_start = true;
				}
				return false;
			},
			this_mouseup: function(e){
				if( this.selection_start ){
					this.selection_start = false;
					this.selectionchange2();
					this.show_toolbar = true;
				}
			},

			live_editing_update: function( vevent ){
				
			},

			load_links: function(){
				var vpost = {};
			},
			disable_activity: function(){
				this.enabled = false;
			},
			enable_activity: function(){
				this.enabled = true;
			},
			initialize_tables: function(){
				var vtables = this.frame.document.getElementById(this.target_editor_id).getElementsByTagName("table");
				for(var i=0;i < vtables.length;i++ ){
					this.initialize_table(vtables[i]);
				}
			},
			initialize_table: function( vtable ){
				var tr_cnt = 0;
				var td_cnt = 0;
				if( vtable.children[0].nodeName ==  "TBODY" ){
					var trs = Array.from(vtable.children[0].childNodes);
					for(var j=0;j < trs.length;j++){
						if( trs[j].nodeName != "TR" ){ trs[j].remove(); trs.splice(j,1); j--; }
					}
					tr_cnt = trs.length;
					for( var j=0;j < trs.length;j++){
						var tds = Array.from(trs[j].childNodes);
						for( var k=0;k < tds.length;k++){
							if( tds[k].nodeName != "TD" && tds[k].nodeName != "TH" ){ tds[k].remove(); tds.splice(k,1); k--; }
						}
						td_cnt = tds.length;
						for(var k=0;k<tds.length;k++){
							tds[k].removeAttribute("class");
							tds[k].addEventListener("mouseup", this.td_mouse_up,true);
							tds[k].addEventListener("mousedown", this.td_mouse_down,true);
							tds[k].addEventListener("mousemove", this.td_mouse_move,true);
						}
					}
				}
			},
			tdgt: function( i, j ){
				if( this.focused_table ){
					try{
						return this.focused_table.children[0].children[i].children[j];
					}catch(e){
						console.error("tdgt: " + i + " " + j + " : " + e);
					}
				}
				return false;
			},
			td_mouse_down: function( e ){if( this.enabled ){
				if( this.settings_menu ){ return false; }
				var v = e.target;
				while( 1 ){
					if( v.nodeName.match(/^(TD|TH)$/) ){
						break;
					}
					v = v.parentNode;
				}
				var vtri = Number(v.parentNode.rowIndex);
				var vtdi = Number(v.cellIndex);
				this.td_sel_start= true;
				this.td_sel_show = false;
				this.td_sel_start_tr=vtri;
				this.td_sel_start_td=vtdi;
				this.td_sel_end_tr=vtri;
				this.td_sel_end_td=vtdi;
				this.td_sel_cells_unselect();
				this.td_sel_cells = [];
				this.td_sel_cnt = 0;
				setTimeout(this.td_calc_cells,50);
			}},
			td_mouse_move: function(e){if( this.enabled ){
				this.echo__("tdmousemove");
				if( this.settings_menu ){ return false; }
				if( e.target.nodeName != "TD" && e.target.nodeName != "TR" ){
					return false;
				}
				// var vtri = Number(e.target.getAttribute("data-tr-id"));
				// var vtdi = Number(e.target.getAttribute("data-td-id"));
				var vtri = Number( e.target.parentNode.rowIndex );
				var vtdi = Number( e.target.cellIndex );
				var tb = e.target.parentNode.parentNode.parentNode;
				if( tb != this.focused_table ){
					return false;
				}
				if( e.buttons == 1 && this.td_sel_start ){
					this.td_sel_show = true;
					if( this.td_sel_cnt > 1 ){
						this.selection_collapse();
					}else{
					}
					this.td_sel_end_tr=vtri;
					this.td_sel_end_td=vtdi;
					setTimeout(this.td_calc_cells,50);
				}else{
					this.td_sel_show = false;
				}
			}},
			selection_collapse: function(){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				sr.setEnd( sr.startContainer, 0 );
				setTimeout(this.selectionchange2,50);
			},
			td_mouse_up: function(e){if( this.enabled ){
				this.td_sel_start= false;
				this.td_sel_show = false;
			}},
			td_sel_unfocus: function(){
				this.td_sel_start= false;
				this.td_sel_show = false;
				this.td_sel_start_tr=-1;
				this.td_sel_start_td=-1;
				this.td_sel_end_tr=-1;
				this.td_sel_end_td=-1;
				this.td_sel_cells_unselect();
				this.td_sel_cells = [];
				if( this.focused_table ){
					this.td_calc_cells();
				}
			},
			td_calc_cells: function(){
				if( !this.focused_table ){
					console.log("td_calc_cells: table not in focus");
					return false;
				}
				var vtot_tr = Number( this.focused_table.children[0].children.length );
				var vtot_td = Number( this.focused_table.children[0].children[0].children.length );

				var s_tr = this.td_sel_start_tr;
				var e_tr = this.td_sel_end_tr;
				var s_td = this.td_sel_start_td;
				var e_td = this.td_sel_end_td;

				if( e_tr < s_tr ){
					var t = s_tr;
					s_tr = e_tr;
					e_tr = t;
				}
				if( e_td < s_td ){
					var t = s_td;
					s_td = e_td;
					e_td = t;
				}
				var cells = [];
				var cnt = 0;
				for(var i=0;i<vtot_tr;i++){
					for(var j=0;j<vtot_td;j++){
						var td = this.tdgt(i,j);
						if( this.td_sel_start ){
							if( i >= s_tr && i <= e_tr && j >= s_td && j <= e_td ){
								cnt++;
							}
						}
					}
				}
				for(var i=0;i<vtot_tr;i++){
					var cellss = [];
					for(var j=0;j<vtot_td;j++){
						var td = this.tdgt(i,j);
						if( this.td_sel_start ){
							if( i >= s_tr && i <= e_tr && j >= s_td && j <= e_td ){
								if( cnt > 1 ){
									try{td.className = "sel";}catch(e){}
								}
								cellss.push({"coli":j,"col":this.tdgt(i,j)});
							}else{
								try{
								if( td.className == "sel" ){
									td.removeAttribute("class");
								}
								}catch(e){}
							}
						}else{
							try{td.removeAttribute("class");}catch(e){}
						}
					}
					if( cellss.length ){
						cells.push({"rowi":i, "cols":cellss });
					}
				}
				this.td_sel_cnt = cnt;
				this.td_sel_cells = cells;
			},
			td_sel_cells_unselect: function(){
				while(this.td_sel_cells.length){
					while(this.td_sel_cells[0]['cols'].length){
						try{this.td_sel_cells[0]['cols'][0]['col'].removeAttribute("class");}catch(e){}
						this.td_sel_cells[0]['cols'].splice(0,1);
					}
					this.td_sel_cells.splice(0,1);
				}
			},
			td_del_cells: function(){
				for(var i=0;i<this.td_sel_cells.length;i++){
					for(var j=0;j<this.td_sel_cells[i]['cols'].length;j++){
						this.td_sel_cells[i]['cols'][j]['col'].innerHTML = "";
					}
				}
				this.hide_other_menus();
			},
			tdsel_delete_rows: function(){
				var trs = Array.from(this.focused_table.children[0].childNodes);
				for(var i=0;i<this.td_sel_cells.length;i++){
					trs[ this.td_sel_cells[i]['rowi'] ].remove();
				}
				this.td_sel_cells = [];
				this.td_sel_unfocus();
				this.hide_other_menus();
				this.initialize_table( this.focused_table );
			},
			tdsel_delete_cols: function(){
				var cols = [];
				for(var i=0;i<this.td_sel_cells.length;i++){
					for(var j=0;j<this.td_sel_cells[i]['cols'].length;j++){
						cols.push(this.td_sel_cells[i]['cols'][j]['coli']);
					}
					break;
				}
				cols.sort(function(a,b){return b-a;});
				var trs = Array.from(this.focused_table.children[0].childNodes);
				for(var i=0;i<trs.length;i++){
					for(var j=0;j<cols.length;j++){
						this.tdgt(i,cols[j]).remove();
					}
				}
				this.td_sel_cells = [];
				this.td_sel_unfocus();
				this.hide_other_menus();
				this.initialize_table( this.focused_table );
			},
			tdsel_copy_col_left: function(){
				var cols = [];
				for(var i=0;i<this.td_sel_cells.length;i++){
					for(var j=0;j<this.td_sel_cells[i]['cols'].length;j++){
						cols.push(this.td_sel_cells[i]['cols'][j]['coli']);
					}
					break;
				}
				var trs = Array.from(this.focused_table.children[0].childNodes);
				for(var i=0;i<trs.length;i++){
					var tds = Array.from(trs[i].childNodes);
					var firsttd =false;
					for(var j=0;j<tds.length;j++){
						if( cols.indexOf(j) > -1 ){
							var vid = "td_" + this.focused_table.id + "_" + i + "_" + j;
							var vtd = this.tdgt(i,j );
							if( !firsttd ){
								firsttd = vtd;
							}
							var newtd = vtd.cloneNode(true);
							newtd.removeAttribute("id");
							var fvtd = firsttd;
							fvtd.insertAdjacentElement("beforebegin", newtd);
						}
					}
				}
				this.td_sel_unfocus();
				this.hide_other_menus();
				this.initialize_table( this.focused_table );
			},
			tdsel_copy_col_right: function(){
				var cols = [];
				for(var i=0;i<this.td_sel_cells.length;i++){
					for(var j=0;j<this.td_sel_cells[i]['cols'].length;j++){
						cols.push(this.td_sel_cells[i]['cols'][j]['coli']);
					}
					break;
				}
				if( !this.focused_table ){
					console.error( "vm_table unset");
					return false;
				}
				var trs = Array.from(this.focused_table.children[0].childNodes);
				for(var i=0;i<trs.length;i++){
					var tds = Array.from(trs[i].childNodes);
					var firsttd = "";
					for(var j=0;j<tds.length;j++){
						if( cols.indexOf(j) > -1 ){
							var vtd = this.tdgt(i,j );
							if( firsttd == "" ){
								firsttd = vtd;
							}
							var newtd = vtd.cloneNode(true);
							newtd.removeAttribute("id");
							var fvtd = firsttd;
							fvtd.insertAdjacentElement("afterend", newtd);
						}
					}
				}
				this.td_sel_unfocus();
				this.hide_other_menus();
				this.initialize_table( this.focused_table );
			},
			tdsel_copy_row_top: function(){
				var first_row = this.td_sel_cells[0]['cols'][0]['col'].parentNode;
				for(var i=0;i<this.td_sel_cells.length;i++){
					var newtr = this.td_sel_cells[i]['cols'][0]['col'].parentNode.cloneNode(true);
					first_row.insertAdjacentElement("beforebegin",newtr);
				}
				this.td_sel_unfocus();
				this.hide_other_menus();
				this.initialize_table( this.focused_table );
			},
			tdsel_copy_row_bottom: function(){
				var last_row = this.td_sel_cells[ this.td_sel_cells.length-1 ]['cols'][0]['col'].parentNode;
				for(var i=0;i<this.td_sel_cells.length;i++){
					var newtr = this.td_sel_cells[i]['cols'][0]['col'].parentNode.cloneNode(true);
					last_row.insertAdjacentElement("afterend",newtr);
					last_row = newtr;
				}
				this.td_sel_unfocus();
				this.hide_other_menus();
				this.initialize_table( this.focused_table );
			},
			tdsel_copy_cells: function(){
				var vtxt = "";
				var vtable = "<table><tbody>";
				for(var i=0;i<this.td_sel_cells.length;i++){
					vtable = vtable + "<tr>";
					var cols = this.td_sel_cells[i]['cols'];
					for(var j=0;j<cols.length;j++){
						vtable = vtable + "<td>" + cols[j]['col'].innerHTML + "</td>";
						vtxt = vtxt + cols[j]['col'].innerHTML + " \t";
					}
					vtxt = vtxt + "\n";
					vtable = vtable + "</tr>";
				}
				vtable = vtable + "</table>";
				var vtxt2 = "";
				for(var i=0;i<vtxt.length;i++){ if( vtxt.charCodeAt(i) < 126 ){ vtxt2 = vtxt2+ vtxt.substr(i,1); } }
				const blob = new Blob([vtable], { type: "text/html" });
				const blob2 = new Blob([vtxt2], { type: "text/plain" });
				const richTextInput = new ClipboardItem({ "text/html": blob, "text/plain": blob2 });
				navigator.clipboard.write([richTextInput]);
				console.log("Table copied");
				this.hide_other_menus();
			},
			quotetype_change: function(e){
				this.focused_block.setAttribute("class", this.quotetype);
			},
			notetype_change: function(e){
				this.focused_block.setAttribute("class", this.notetype);
				var symbol = "";
				if( this.notetype == "block_note_info"){symbol="&#9758;";}
				if( this.notetype == "block_note_alert"){symbol="&#9762;";}
				if( this.notetype == "block_note_caution"){symbol="&#9888;";}
				if( this.notetype == "block_note_dark"){symbol="&#10026;";}
				var k = this.focused_block.getElementsByClassName("note1");
				if( k.length ){ k[0].innerHTML = symbol; }
			},
			block_to_paragraph: function(){
				if( this.focused_block_type == "QUOTE" ){
					var vl = this.frame.document.createElement("p");
					vl.innerHTML = this.focused_block.innerHTML;
					this.focused_block.replaceWith( vl );
					this.select_range_with_element( vl );
					this.selectionchange2();
				}else if( this.focused_block_type == "NOTE" ){
					var v = Array.from(this.focused_block.getElementsByClassName("note2")[0].childNodes);
					var n = [];
					while( v.length ){
						if( v[0].nodeName != "#text"){
							n.push( v[0] );
							this.focused_block.insertAdjacentElement("afterend", v[0] );
						}
						v.splice(0,1);
					}
					this.select_elements(n);
					this.focused_block.remove();
					this.selectionchange2();
				}
			},
			paragraph_to_text: function(){
				if( this.focused.nodeName.match(/^(P|DIV|H1|H2|H3|H4)$/) ){
					if( this.focused.parentNode.hasAttribute("contenteditable") == false ){
						if( this.focused.parentNode.nodeName.match(/^(LI|TD|TH)$/) ){
							var v = Array.from(this.focused.childNodes);
							while( v.length ){
								if( v[0].nodeName == "#text"){
									this.focused.insertAdjacentText("afterend", v[0].data );
								}else{
									this.focused.insertAdjacentElement("afterend", v[0] );
								}
								v.splice(0,1);
							}
							this.select_range_with_element(this.focused.parentNode);
							this.focused.remove();
							this.selectionchange2();
						}else{
							var v = Array.from(this.focused.childNodes);
							while( v.length ){
								if( v[0].nodeName == "#text"){
									this.focused.insertAdjacentText("afterend", v[0].data );
								}else{
									this.focused.insertAdjacentElement("afterend", v[0] );
								}
								v.splice(0,1);
							}
							this.select_range_with_element(this.focused.parentNode);
							this.focused.remove();
							this.selectionchange2();
						}
					}
				}
			},
			text_to_paragraph: function(){
				if( this.focused.nodeName == "LI" || this.focused.nodeName == "TD" ){
					var vl = this.frame.document.createElement("p");
					vl.innerHTML = this.focused.innerHTML;
					this.focused.innerHTML = "";
					this.focused.appendChild( vl );
					this.select_range_with_element( vl );
					this.selectionchange2();
				}
			},
			blocktype_change: function(e){
				var selected_type = e.target.value;
				var current_block_type = this.focused_type;
				if( this.focused_block ){
					if( this.focused_block.hasAttribute("data-block-type") ){
						current_block_type = this.focused_block.getAttribute("data-block-type");
					}
				}
				if( current_block_type != e.target.value ){
					if( selected_type.match(/^(P|DIV|H1|H2|H3|H4|PRE)$/) && selected_type != this.focused_type ){
						var vn = this.frame.document.createElement( selected_type );
						var val = this.focused.getAttributeNames();
						for(var i=0;i<val.length;i++){
							vn.setAttribute( val[i], this.focused.getAttribute( val[i] ) );
						}
						vn.innerHTML = this.focused.innerHTML;
						this.focused.replaceWith( vn );
						this.set_focus_at( vn );
						this.set_focused();
					}
					if( selected_type.match(/^(NOTE|QUOTE|CODE)$/) ){
						if( selected_type == "NOTE" ){
							var newel = this.get_note_html();
							var editel = newel.getElementsByTagName("p")[0];
							editel.innerHTML = this.focused.innerHTML;
						}else if( selected_type == "CODE" ){
							var newel = this.frame.document.createElement("PRE");
							newel.innerText = this.focused.innerText;
						}else if( selected_type == "QUOTE" ){
							var newel = this.get_quote_html();
							var editel = newel.getElementsByTagName("p")[0];
							editel.innerHTML = this.focused.innerHTML;
						}
						var val = this.focused.getAttributeNames();
						for(var i=0;i<val.length;i++){
							newel.setAttribute( val[i], this.focused.getAttribute( val[i] ) );
						}
						this.focused.replaceWith( newel );
						if( selected_type == "NOTE" ){
							this.set_focus_at( editel );
						}else{
							this.set_focus_at( newel );
						}
						this.set_focused();
					}
				}
			},
			get_prev_id: function( v ){
				if( v.hasAttribute("data-prev-id") ){
					return v.getAttribute("data-prev-id");
				}else{
					return "";
				}
			},
			echo__: function(v){
				if( typeof(v)=="object" ){
					console.log( JSON.stringify(v,null,4));
				}else{
					console.log( v );
				}
			},
			is_it_in_contenteditable: function(){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				var v = sr.commonAncestorContainer;
				if( v.nodeName == "#text" ){
					v = v.parentNode;
				}
				var cnt = 0;
				while(1){cnt++;if(cnt>3){break;return false;}
					if( v.hasAttribute("contenteditable") ){
						return true;
					}
					v = v.parentNode;
				}
				return false;
			},
			is_it_in_text: function(){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				const nodeIterator = this.frame.document.createNodeIterator(
					sr.commonAncestorContainer,NodeFilter.SHOW_ALL,(node) => {return NodeFilter.FILTER_ACCEPT;}
				);
				var s = false;
				var f = true;
				while( currentnode = nodeIterator.nextNode() ){
					if( currentnode == sr.startContainer ){
						s = true;
					}
					if( currentnode.nodeName.match(/^(P|LI|TD|TH|DIV)$/) ){
						f = false;
						return false;
					}
					if( currentnode == sr.endContainer ){
						break;
					}
				}
				return true;
			},
			ul_change_to_text: function(){
				if( this.focused_ul ){
					var parent_node = this.focused_ul.parentNode;
					var parent_node_type = this.focused_ul.parentNode.nodeName;
					var lis= Array.from(this.focused_ul.childNodes);
					for( var i=0;i<lis.length;i++){
						if( lis[i].nodeName != "LI" ){
							lis[i].remove();
							lis.splice(i,1);
							i--;
						}
					}
					var nodes = [];
					var nxt = this.focused_ul;
					for(var i=0;i<lis.length;i++){
						if( parent_node_type.match(/^(LI)$/) ){
							parent_node.insertAdjacentElement("afterend",lis[i]);
							parent_node = lis[i];
							nodes.push(lis[i]);
						}else if( parent_node_type.match(/^(P)$/) ){
							var vl = this.frame.document.createElement("P");
							vl.innerHTML = lis[i].innerHTML;
							parent_node.insertAdjacentElement("afterend",vl);
							parent_node = vl;
							nodes.push(vl);
						}else{
							var vl = this.frame.document.createElement("P");
							vl.innerHTML = lis[i].innerHTML;
							lis[i].remove();
							nxt.insertAdjacentElement("afterend", vl);
							nxt = vl;
							nodes.push(vl);
						}
					}
					this.focused_ul.remove();
					this.select_elements( nodes );
					setTimeout(this.selectionchange2,50);
				}else{
					console.log("UL not focused!");
				}
			},
			is_parent_in_bold: function( v){
				var cnt = 0;
				while( 1 ){cnt++;if(cnt>10){break;}
					if( v.nodeName !="#text" ){
					if( v.nodeName == "#document" || v.nodeName == "BODY" ){return false;}
					if( "hasAttribute" in v == false ){return false;}
					if( v.nodeName.match(/^(B|STRONG)$/) ){
						return v;
					}
					}
					v = v.parentNode;
				}
				return false;
			},
			make_bold: function(){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				if( sr.collapsed ){
					if( sr.startContainer.nodeName == "#text" ){
						var bold_parent = this.is_parent_in_bold(sr.startContainer.parentNode);
						if( bold_parent ){
							while( bold_parent.childNodes.length ){
								if( bold_parent.childNodes[0].nodeName=="#text" ){
									bold_parent.insertAdjacentText("beforebegin", bold_parent.childNodes[0].data);
									bold_parent.childNodes[0].remove();
								}else{
									bold_parent.insertAdjacentElement("beforebegin", bold_parent.childNodes[0]);
								}
							}
							this.set_focus_at( bold_parent.parentNode.childNodes[0] );
							bold_parent.remove();
						}else{
							var vt = sr.commonAncestorContainer;
							if( vt.nodeName == "#text"){
								vt = vt.parentNode;
							}
							var vl = this.frame.document.createElement("strong");
							while( vt.childNodes.length ){
								vl.appendChild( vt.childNodes[0] );
							}
							vt.appendChild(vl);
							this.select_range_with_element(vl);
						}
					}
				}else{
					var bold_parent_start = this.is_parent_in_bold( sr.startContainer );
					var bold_parent_end = this.is_parent_in_bold( sr.endContainer )
					if( bold_parent_start && bold_parent_end && bold_parent_start == bold_parent_end ){
						var bold_parent = bold_parent_start;
						while( bold_parent.childNodes.length ){
							if( bold_parent.childNodes[0].nodeName=="#text" ){
								bold_parent.insertAdjacentText("beforebegin", bold_parent.childNodes[0].data);
								bold_parent.childNodes[0].remove();
							}else{
								bold_parent.insertAdjacentElement("beforebegin", bold_parent.childNodes[0]);
							}
						}
						this.set_focus_at( bold_parent.parentNode.childNodes[0] );
						bold_parent.remove();
					}else if( sr.startContainer.nodeName =="#text" && sr.endContainer.nodeName =="#text" && sr.startContainer == sr.endContainer ){
						this.apply_style_text('bold');
					}else{
						console.log("removing styles in the range!");
						this.range_remove_style( 'bold' );
						if( this.is_it_single_text_node() ){
							this.apply_style_text('bold');
						}else if( this.is_it_in_text() ){
							this.range_apply_style_text('bold');
						}else{
							this.range_apply_style('bold');
						}
					}
				}
				return false;
			},
			make_italic: function(){
				alert('pending');
			},
			make_link: function(){
				if( this.focused_anchor ){
					this.anchor_form = true;
					return false;
				}
				var sr = this.frame.document.getSelection().getRangeAt(0);
				var is_in_editor = this.is_target_in_editor( sr.startContainer );
				if( is_in_editor == "editor" ){
					var editable = this.find_target_editable(sr.startContainer);
					if( editable ){
						if( sr.endContainer.nodeName!="#text" || sr.startContainer.nodeName != "#text" ){
							var vs = editable.childNodes[0];
							sr.setStart(vs , 0);
							var ve = editable.childNodes[editable.childNodes.length-1];
							if( ve.nodeName != "#text" ){
								sr.setEnd( ve, ve.childNodes.length);
							}else{
								sr.setEnd( ve, ve.data.length);
							}
						}
						this.anchor_at_range = sr;
						var r = sr.getBoundingClientRect();
						var s = Number(window.scrollY);
						this.anchor = false;
						var c = sr.cloneContents().childNodes;
						var vh = "";
						for(var i=0;i<c.length;i++){
							if( c[i].nodeName == "#text" ){
								vh = vh + c[i].data;
							}else{
								vh = vh + c[i].innerText;
							}
						}
						this.anchor_href = "";
						this.anchor_text = vh;
						var s = Number(window.scrollY);
						this.anchor_menu_style = "top:"+(Number(r.bottom)+s)+"px;left:"+(Number(r.left)+20)+"px";
						this.anchor_form = true;
						this.anchor_menu = true;
						setTimeout(function(){this.frame.document.getElementsByClassName("anchor_text")[0].focus();},200);
					}
				}
			},
			make_ol: function(){
				
			},
			make_ul: function(){
				
			},
			remove_bullets: function(){

				
			},
			select_range: function(r){
				this.frame.document.getSelection().removeAllRanges();
				this.frame.document.getSelection().addRange(r);
			},
			make_indent: function(){
				
			},
			make_unindent: function(){
				
			},
			make_clear: function(){
				
			},
			range_remove_style: function( vop ){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				if( sr.startContainer.nodeName == "#text" ){
					if( sr.startContainer.parentNode.nodeName.match(/^(B|I|EM|STRONG|SPAN)$/) ){
						sr.setStartBefore( sr.startContainer.parentNode );
					}
				}
				if( sr.endContainer.nodeName == "#text" ){
					if( sr.endContainer.parentNode.nodeName.match(/^(B|I|EM|STRONG|SPAN)$/) ){
						sr.setEndAfter( sr.endContainer.parentNode );
					}
				}
				var start_c = sr.startContainer;
				var end_c = sr.endContainer;
				if( end_c.nextElementSibling ){
					var end_sel_node = end_c.nextElementSibling;
				}else{
					var end_sel_node = end_c.parentNode.nextElementSibling;
				}
				var sr = this.frame.document.getSelection().getRangeAt(0);
				const nodeIterator = this.frame.document.createNodeIterator(
					sr.commonAncestorContainer,NodeFilter.SHOW_ALL,(node) => {return NodeFilter.FILTER_ACCEPT;}
				);
				var nodelist = [];
				var s = false;
				while (currentnode = nodeIterator.nextNode()) {
					if( currentnode == sr.startContainer ){
						s = true;
					}
					if( s ){
						if( currentnode.nodeName.match( /^(B|STRONG|SPAN|EM|I|H1|H2|H3|H4)$/ ) ){
							nodelist.push( currentnode );
						}else if( currentnode.nodeName !="#text" ){
							if( currentnode.hasAttribute("style") ){
								currentnode.removeAttribute("style");
							}
						}
					}
					if( currentnode == end_sel_node ){
						break;
					}
				}
				while( nodelist.length ){
					var v = nodelist.pop();
					if( 1==2 && v == end_c ){
					}else{
						v.outerHTML = v.innerHTML;
					}
				}
				var r = new Range();
				r.setStart(start_c, 0);
				r.setEnd(end_c, end_c.childNodes.length );
				this.frame.document.getSelection().removeAllRanges();
				this.frame.document.getSelection().addRange(r);
			},
			range_apply_style: function( vop ){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				const nodeIterator = this.frame.document.createNodeIterator(
					sr.commonAncestorContainer,NodeFilter.SHOW_ALL,(node) => {return NodeFilter.FILTER_ACCEPT;}
				);
				var start_c = sr.startContainer;
				var end_c = sr.endContainer;
				if( sr.endContainer.nextElementSibling ){
					var end_sel_node = sr.endContainer.nextElementSibling;
				}else{
					var end_sel_node = sr.endContainer.parentNode.nextElementSibling;
				}
				var nodelist = [];
				var s = false;
				while( currentnode = nodeIterator.nextNode() ){
					if( currentnode == end_sel_node ){
						break;
					}
					if( currentnode == sr.startContainer ){
						s = true;
						if( currentnode.nodeName == "#text" ){
							if( currentnode.parentNode.nodeName.match( /^(P|LI|TD)$/ ) ){
								nodelist.push( currentnode.parentNode );
							}
						}
					}
					if( s ){
						if( currentnode.nodeName.match( /^(P|LI|TD)$/ ) ){
							nodelist.push( currentnode );
						}
					}
				}
				for(var i=0;i<nodelist.length;i++){
					if( nodelist[ i ].nodeName.match( /^(LI|TD)$/ ) ){
						var f = true;
						for(var j=0;j<nodelist[ i ].childNodes.length;j++){
							if( nodelist[ i ].childNodes[ j ].nodeName != "#text" ){
								f = false;
							}
						}
						if( f ){
							var k = this.frame.document.createElement("strong");
							nodelist[ i ].appendChild(k);
							while( nodelist[ i ].childNodes.length > 1 ){
								k.appendChild( nodelist[ i ].childNodes[0] );
							}
						}
					}
					if( nodelist[ i ].nodeName.match( /^(P)$/ ) ){
						var k = this.frame.document.createElement("strong");
						nodelist[ i ].appendChild(k);
						while( nodelist[ i ].childNodes.length > 1 ){
							k.appendChild( nodelist[ i ].childNodes[0] );
						}
					}
				}
				var r = new Range();
				r.setStart(start_c, 0);
				r.setEnd(end_c, end_c.childNodes.length );
				this.frame.document.getSelection().removeAllRanges();
				this.frame.document.getSelection().addRange(r);
			},
			range_apply_style_text: function( vop ){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				const nodeIterator = this.frame.document.createNodeIterator(
					sr.commonAncestorContainer,NodeFilter.SHOW_ALL,(node) => {return NodeFilter.FILTER_ACCEPT;}
				);
				var nodelist = [];
				var s = false;
				while( currentnode = nodeIterator.nextNode() ){
					if( currentnode == sr.startContainer ){
						s = true;
					}
					if( s ){
						if( currentnode.nodeName == "#text" ){
							if( currentnode == sr.startContainer ){
								nodelist.push({"n":currentnode,"s":sr.startOffset});
							}else{
								nodelist.push({"n":currentnode,"s":-1});
							}
						}
						if( currentnode.nodeName.match( /^(P|LI|TD)$/ ) ){
							nodelist.push( currentnode );
						}
					}
					if( currentnode == sr.endContainer ){
						if( currentnode.nodeName == "#text" ){
							nodelist.push( currentnode.parentNode );
						}
						break;
					}
				}
				for(var i=0;i<nodelist.length;i++){
					if( nodelist[ i ].nodeName.match( /^(LI|TD)$/ ) ){
						var f = true;
						for(var j=0;j<nodelist[ i ].childNodes.length;j++){
							if( nodelist[ i ].childNodes[ j ].nodeName != "#text" ){
								f = false;
							}
						}
						if( f ){
							var k = this.frame.document.createElement("strong");
							nodelist[ i ].appendChild(k);
							while( nodelist[ i ].childNodes.length > 1 ){
								k.appendChild( nodelist[ i ].childNodes[0] );
							}
						}
					}
					if( nodelist[ i ].nodeName.match( /^(P)$/ ) ){
						var k = this.frame.document.createElement("strong");
						nodelist[ i ].appendChild(k);
						while( nodelist[ i ].childNodes.length > 1 ){
							k.appendChild( nodelist[ i ].childNodes[0] );
						}
					}
				}
			},
			is_it_single_text_node: function(vop){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				if( sr.startContainer.nodeName == "#text" && sr.startContainer == sr.endContainer ){
					return true;
				}else{
					return false;
				}
			},
			apply_style_text: function( vop ){
				var sr = this.frame.document.getSelection().getRangeAt( 0 );
				var av = Array.from( sr.startContainer.parentNode.childNodes );
				var ai = av.indexOf( sr.startContainer );
				var v1 = sr.startContainer.parentNode.childNodes[ ai ];
				var v1i = sr.startOffset;
				var v2i = sr.endOffset;
				var kp = new DocumentFragment();
				kp.appendChild( this.frame.document.createTextNode( v1.nodeValue.substr(0, v1i) ) );
				var b = this.frame.document.createElement("strong");
				b.innerHTML = v1.nodeValue.substr( v1i, (v2i-v1i) );
				kp.appendChild( b );
				kp.appendChild( this.frame.document.createTextNode( v1.nodeValue.substr( (v2i), 3333) ) );
				sr.startContainer.parentNode.insertBefore( kp, v1 );
				v1.remove();
				var nr = new Range();
				nr.setStart(b,0);
				nr.setEndAfter(b);
				var sel = this.frame.document.getSelection();
				sel.removeAllRanges();
				sel.addRange(nr);
			},
			ul_type_change: function(e){
				this.focused_ul.className = this.ul_type;
			},
			td_settings_update: function(p,v){

			},
			td_setting_wt_change: function(e){
				if( this.td_settings['wt'] == "auto" ){
					this.td_settings['v'] = '';
				}
				this.td_setting_change2();
			},
			td_setting_change1: function(e){
				if( this.td_settings['u'] == "%" ){
					if( Number( this.td_settings['v'] ) > 100 ){
						this.td_settings['v'] = '';
					}
				}
				this.td_setting_change2();
			},
			td_setting_change2: function(e){
				if( this.td_settings['v'] && this.td_settings['wt'] =='s' ){
					if( this.td_settings['u'] == "px" ){
						if( Number(this.td_settings['v'])> 300 ){
							this.td_settings['v'] = '300';
						}
					}else{
						if( Number(this.td_settings['v'])> 100 ){
							this.td_settings['v']='100';
						}
					}
					var v = this.td_settings['v'] + (this.td_settings['u']=='%'?'%':'');
				}else{
					var v = "";
				}
				var k = this.focused_table.children[0].children;
				var vi = this.focused_td.cellIndex;
				for(var i=0;i<k.length;i++){
					if( this.td_settings['v'] ){
						k[i].children[ vi ].setAttribute("width", v);
					}else{
						k[i].children[ vi ].removeAttribute("width", v);
					}
					k[i].children[ vi ].setAttribute("data-wt", this.td_settings['wt']);
					k[i].children[ vi ].setAttribute("data-wrap", this.td_settings['wrap']);
					k[i].children[ vi ].setAttribute("data-align", this.td_settings['align']);
				}
			},
			set_vpop_style: function(){
				if( this.focused ){
					var vp = this.focused.getBoundingClientRect();
					var vc = [];
					var s = Number(window.scrollY);
					vc.push( "top:" +( Number(vp.top)+s ).toFixed(0) + "px" );
					vc.push( "left:"+ ( Number(vp.left)-5 ).toFixed(0) + "px" );
					this.vpop_style = vc.join( ";" );
				}else{
					this.vpop_style = "";
				}
			},
			gettopstyle: function(v, vl){
				var vp = v.getBoundingClientRect();
				var vc = [];
				var s = Number(window.scrollY);
				vc.push( "top:" +( Number(vp.top)+s-2-5 ).toFixed(0) + "px" );
				vc.push( "width:" +( Number(vp.width)-(Number(vp.width)*.2) ).toFixed(0) + "px"  );
				vc.push( "left:" +( Number(vp.left) ).toFixed(0) + "px"  );
				if( vl == 0 ){
					vc.push( "z-index: 405"  );
					vc.push( "background-color: rgb(150,200,200)");
				}else if( vl == 1 ){
					vc.push( "z-index: 404"  );
					vc.push( "background-color: rgb(200,150,200)");
				}else if( vl == 2 ){
					vc.push( "z-index: 403"  );
					vc.push( "background-color: rgb(200,200,150)");
				}else if( vl == 3 ){
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(100,200,150)");
				}else if( vl == 4 ){
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(150,200,200)");
				}else if( vl == 5 ){
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(200,200,150)");
				}else if( vl == 6 ){
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(100,200,150)");
				}else if( vl == 7 ){
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(150,200,200)");
				}
				return vc.join(";");
			},
			getbottomstyle: function(v, vl){
				var vp = v.getBoundingClientRect();
				var vc = [];
				var s = Number(window.scrollY);
				vc.push( "top:" +( Number(vp.bottom)+s ).toFixed(0) + "px" );
				vc.push( "width:" +( Number(vp.width)-(Number(vp.width)*.2) ).toFixed(0) + "px"  );
				vc.push( "left:" +( Number(vp.left) ).toFixed(0) + "px"  );
				if( vl == 0 ){
					vc.push( "z-index: 405"  );
					vc.push( "background-color: rgb(150,200,200)");
				}else if( vl == 1 ){
					vc.push( "z-index: 404"  );
					vc.push( "background-color: rgb(200,150,200)");
				}else if( vl == 2 ){
					vc.push( "z-index: 403"  );
					vc.push( "background-color: rgb(200,200,150)");
				}else if( vl == 3 ){
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(100,200,150)");
				}else if( vl == 4 ){
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(150,200,200)");
				}else if( vl == 5 ){
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(200,200,150)");
				}else if( vl == 6 ){
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(100,200,150)");
				}else if( vl == 7 ){
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(150,200,200)");
				}
				return vc.join(";");
			},
			getleftstyle: function( v, vl ){
				var vp = v.getBoundingClientRect();
				var vc = [];
				var s = Number(window.scrollY);
				vc.push( "top:" +( Number(vp.top)+s ).toFixed(0) + "px" );
				vc.push( "height:" +( Number(vp.height) ).toFixed(0) + "px" );
				if( vl == 0 ){
					vc.push( "width: 4px"  );
					vc.push( "left:" +( Number(vp.left)-6 ).toFixed(0) + "px" );
					vc.push( "z-index: 405"  );
					vc.push( "background-color: rgb(150,200,200)");
				}else if( vl == 1 ){
					vc.push( "width: 8px"  );
					vc.push( "left:" +( Number(vp.left)-10 ).toFixed(0) + "px" );
					vc.push( "z-index: 404"  );
					vc.push( "background-color: rgb(200,150,200)");
				}else if( vl == 2 ){
					vc.push( "width: 12px"  );
					vc.push( "left:" +( Number(vp.left)-14 ).toFixed(0) + "px" );
					vc.push( "z-index: 403"  );
					vc.push( "background-color: rgb(200,200,150)");
				}else if( vl == 3 ){
					vc.push( "width: 16px"  );
					vc.push( "left:" +( Number(vp.left)-18 ).toFixed(0) + "px" );
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(100,200,150)");
				}else if( vl == 4 ){
					vc.push( "width: 16px"  );
					vc.push( "left:" +( Number(vp.left)-18 ).toFixed(0) + "px" );
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(150,200,200)");
				}else if( vl == 5 ){
					vc.push( "width: 16px"  );
					vc.push( "left:" +( Number(vp.left)-18 ).toFixed(0) + "px" );
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(200,150,200)");
				}else if( vl == 6 ){
					vc.push( "width: 16px"  );
					vc.push( "left:" +( Number(vp.left)-18 ).toFixed(0) + "px" );
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(200,200,150)");
				}else if( vl == 7 ){
					vc.push( "width: 16px"  );
					vc.push( "left:" +( Number(vp.left)-18 ).toFixed(0) + "px" );
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(100,200,150)");
				}else if( vl == 8 ){
					vc.push( "width: 16px"  );
					vc.push( "left:" +( Number(vp.left)-18 ).toFixed(0) + "px" );
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(150,200,200)");
				}else if( vl == 9 ){
					vc.push( "width: 16px"  );
					vc.push( "left:" +( Number(vp.left)-18 ).toFixed(0) + "px" );
					vc.push( "z-index: 402"  );
					vc.push( "background-color: rgb(200,150,200)");
				}
				return vc.join(";");
			},
			initialize_events: function(){
				window.addEventListener( 'dblclick', this.dblclickit, true );
				window.addEventListener( 'click', this.clickdoc, true );
				window.addEventListener( 'dragstart', this.dragstart, true );
				window.addEventListener( 'drag', this.dragstart, true );
				window.addEventListener( 'keydown', this.keydown_outside, true );
				//window.addEventListener( 'keyup', this.keyup, true );
				window.addEventListener( 'mousemove', this.mousemove, true );
				window.addEventListener( 'mouseover', this.mouseover, true );
				//window.addEventListener( "contextmenu", this.contextmenu, true);
				//window.addEventListener( 'mousedown', this.mousedown, true );
				//window.addEventListener( 'mouseup', this.mouseup, true );
				//this.frame.document.addEventListener( 'selectionchange', this.selectionchange, true );
				//this.frame.document.addEventListener('selectstart', this.selectstart );
			},
			dragstart: function(e){
				e.preventDefault();
			},
			mousedown: function(e){if( this.enabled ){
			}},
			mouseup: function(e){if( this.enabled ){

			}},
			mouseover: function(e){if( this.enabled ){

			}},
			mousemove: function(e){if( this.enabled ){
				/*
				button: 0
				clientX: 950 clientY: 344
				layerX: 950 layerY: 344
				offsetX: 950 offsetY: 244
				pageX: 950 pageY: 344
				screenX: 950 screenY: 447
				x: 950 y: 344
				*/
				if( this.td_sel_show ){
					return false;
				}
				if( this.settings_menu ){
					return false;
				}
				if( this.anchor_menu || this.add_menu || this.td_add_menu ){
					return false;
				}
				if( this.image_popup ){
					return false;
				}
				if( this.sections_selected ){
					return false;
				}
				return false;
			}},
			td_settings_read: function(){
					var wt = "a";
					var u = "px";
					var v = '';
					var wrap = "wrap";
					var align= "left";
					if( this.focused_td.hasAttribute("data-wrap") ){
						wrap = this.focused_td.getAttribute("data-wrap");
					}
					if( this.focused_td.hasAttribute("data-align") ){
						align = this.focused_td.getAttribute("data-align");
					}
					wt = 'a';
					if( this.focused_td.hasAttribute("data-wt") ){
						wt = this.focused_td.getAttribute("data-wt");
					}
					if( this.focused_td.hasAttribute("width") ){
						v = this.focused_td.getAttribute("width");
						if( v.match(/px$/)){
							v = v.replace("px","");
							u = "px";
						}
						if( v.match(/\%$/)){
							v = v.replace("%","");
							u = "%";
						}
					}
					this.td_settings[ 'wt' ] = wt;
					this.td_settings[ 'w' ] = "";
					this.td_settings[ 'u' ] = u;
					this.td_settings[ 'v' ] = v;
					this.td_settings[ 'b' ] = "";
					this.td_settings[ 'bg' ] = "";
					this.td_settings[ 'wrap' ] = wrap;
					this.td_settings[ 'align' ] = align;
			},
			table_settings_read: function(){if( this.focused_table != false ){
					if( this.focused_table.hasAttribute("data-tb-border") ){
						var border = this.focused_table.getAttribute("data-tb-border");
					}else{
						var border = "a";
					}
					if( this.focused_table.hasAttribute("data-tb-striped") ){
						var striped = this.focused_table.getAttribute("data-tb-striped");
					}else{
						var striped = "no";
					}
					if( this.focused_table.hasAttribute("data-tb-spacing") ){
						var spacing = this.focused_table.getAttribute("data-tb-spacing");
					}else{
						var spacing = "no";
					}
					if( this.focused_table.hasAttribute("data-tb-hover") ){
						var hover = this.focused_table.getAttribute("data-tb-hover");
					}else{
						var hover = "no";
					}
					if( this.focused_table.hasAttribute("data-tb-theme") ){
						var theme = this.focused_table.getAttribute("data-tb-theme");
					}else{
						var theme = "none";
					}
					if( this.focused_table.hasAttribute("data-tb-width") ){
						var width = this.focused_table.getAttribute("data-tb-width");
					}else{
						var width = "auto";
					}
					if( this.focused_table.hasAttribute("data-tb-header") ){
						var header = this.focused_table.getAttribute("data-tb-header");
					}else{
						var header = "auto";
					}
					if( this.focused_table.hasAttribute("data-tb-colheader") ){
						var colheader = this.focused_table.getAttribute("data-tb-colheader");
					}else{
						var colheader = "auto";
					}
					var mheight = "none";
					var overflow = "auto";
					if( this.focused_table.parentNode.hasAttribute("data-block-type")){
						if( this.focused_table.parentNode.getAttribute("data-block-type") == "TABLE" ){
							if( this.focused_table.parentNode.hasAttribute("data-mheight") ){
								mheight = this.focused_table.parentNode.getAttribute("data-mheight");
							}
							if( this.focused_table.parentNode.hasAttribute("data-overflow") ){
								overflow = this.focused_table.parentNode.getAttribute("data-overflow");
							}
						}
					}
					this.table_settings[ 'mheight' ] = mheight;
					this.table_settings[ 'overflow' ] = overflow;
					this.table_settings[ 'border' ] = border;
					this.table_settings[ 'striped' ] = striped;
					this.table_settings[ 'spacing' ] = spacing;
					this.table_settings[ 'hover' ] = hover;
					this.table_settings[ 'theme' ] = theme;
					this.table_settings[ 'width' ] = width;
					this.table_settings[ 'header' ] = header;
					this.table_settings[ 'colheader' ] = colheader;
				}
			},
			create_table_menu: function(v){
				var vid = "";
				if( v.hasAttribute("id") ){
					vid = v.getAttribute("id");
				}else{
					vid = self.randid();
					v.setAttribute("id", vid);
				}
				if( vid in this.table_menus == false ){
					var t = this.frame.document.createElement("div");
					t.className = "vmtable";
					this.table_menus[ vid ] ={
						"t": this.frame.document.createElement("div"),
					};
					this.vmtblt = "height:"+(Number(v.height))+";width:"+(Number(v.width))+"px;top:"+(Number(v.top)+s)+"px;left:"+(Number(v.left))+"px";
					this.vmtbll = "height:4px;width:"+(Number(v.width)+4)+"px;top:"+(Number(v.bottom)+s-2)+"px;left:"+(Number(v.left)-2)+"px";
				}
			},
			selectstart: function(e){
				console.log("select start");
			},
			selectionchange: function(e){if( this.enabled ){
				if( this.frame.document.getSelection().isCollapsed == false ){
					var t = Number( new Date().getTime() );
					if( ( t  - this.selection_t ) > 100 ){
						this.selection_t = t;
						setTimeout(this.selectionchange2, 50, e);
					}else{
						//console.log("skip");
					}
				}else{
					this.sections_selected= false;
				}
			}},
			selectionchange2: function( e ){
				this.set_focused();
			},
			hide_overlay: function(){

			},
			dblclickit: function(e){
				if( this.enabled ){
				setTimeout(this.dblclickit2,50,e);
				}
			},
			dblclickit2: function(e){
				if( e.target.nodeName == "IMG" ){
					if( this.focused_block_type == "IMAGE" ){
						this.hide_other_menus();
						setTimeout(this.show_image_update_popup,100);
					}
				}
			},

			check_after_enter: function(){
				//return false;
				var sr = this.frame.document.getSelection().getRangeAt(0);
				if( sr.startOffset == sr.endOffset ){
					var v = false;
					if( sr.startContainer.nodeName == "#text" ){
						console.log("1111");
						var vtext = sr.startContainer;
						var vprev = vtext.previousSibling;
						if( vprev ){
							if( vprev.nodeName == "BR" ){
								v = vprev;
							}
						}
					}else{
						console.log("2222");
						v = sr.startContainer.childNodes[ sr.startOffset ];
						console.log( v );
					}
					if( v ){
						if( v.nodeName == "BR" ){
							if( v.parentNode.nodeName.match( /^(P|LI|TD)$/ ) == null ){
								var vl = this.frame.document.createElement("p");
								vl.innerHTML= "&nbsp;";
								v.replaceWith( vl );
								this.select_element_text(vl);
								if( vl.previousSibling ){
									var vprev = vl.previousSibling;
								}else{
									var vprev = false;
								}
								if( vl.nextSibling ){
									var vnext = vl.nextSibling;
								}else{ var vnext = false;}
								if( vnext ){
									if( vnext.nodeName == "#text" ){
										vl.appendChild( vnext );
									}
								}
								if( vprev ){
									if( vprev.nodeName == "#text" ){
										var v2 = this.frame.document.createElement("p");
										v2.innerHTML = vprev.data;
										vprev.replaceWith(v2);
										if( v2.previousSibling ){
											vprev = v2.previousSibling;
										}else{
											vprev = false;
										}
									}
									if( vprev.nodeName == "BR" ){
										var vtext = vprev.previousSibling;
										if( vtext ){
											if( vtext.previousSibling != null ){
												if( vtext.previousSibling.nodeName == "#text" ){
													vtext.data = vtext.previousSibling.data+ vtext.data;
													vtext.previousSibling.remove();
												}else{
													var vtext_prev = vtext.previousSibling;
													console.error("After enter. Previous element sibling found!");
												}
											}{
												var v2 = this.frame.document.createElement("p");
												v2.innerHTML = vtext.data;
												vtext.replaceWith(v2);
												vprev.remove();
											}
										}
									}
								}
								return false;
							}
						}else if( v.previousElementSibling ){
							if( v.previousElementSibling.nodeName == "BR" ){
								console.log( "Found previous BR");
								v = v.previousElementSibling;
								if( v.parentNode.nodeName != "P" ){
									var vl = this.frame.document.createElement("p");
									vl.innerHTML= "&nbsp;";
									v.replaceWith( vl );
								}
							}else{
								console.log( "it is not br");
							}
						}else{
							console.log("no previous eleemnt");
						}
					}else{
						console.log( "Check after enter 2: " );
						console.log( sr );
					}
				}else{
					console.log( "Check after enter 3: " );
					console.log( sr );
				}
				this.set_focused();
				return false;
				if( this.focused.nodeName == "DIV" ){
					if( this.focused.hasAttribute("data-id") ){
						if( this.focused.getAttribute("data-id") == "root" ){
							return false;
						}
					}
					var vl = this.frame.document.createElement("p");
					vl.innerHTML = this.focused.innerHTML;
					this.focused.replaceWith(vl);
				}
			},
			keydown_outside: function(e){if( this.enabled ){
				if( e.keyCode == 27 ){ // escape
					this.show_toolbar = false;
					this.contextmenu_hide();
					if( this.link_suggest ){
						this.link_suggest = false;
					}else if( this.anchor_menu ){
						this.anchor_menu = false;
					}
					return false;
				}
			}},
			keydown: function(e){if( this.enabled ){
				if( e.keyCode == 27 ){ // escape
					console.log("keydown 27 inside!");
					this.hide_other_menus();
					return false;
				}
				if( e.keyCode == 73 && e.ctrlKey ){ // ctrl + i
					this.make_link();
					e.preventDefault();
					e.stopPropagation();
					return false;
				}
				this.set_focused("fromkeydown");
				if( ["F5"].indexOf( e.key ) > -1 ){
					return false;
				}
				if( this.focused.hasAttribute("data-block-type") ){
					if( [33,34,35,36,37,38,39,40,9].indexOf( e.keyCode ) == -1 ){
						e.preventDefault();e.stopPropagation();
					}
				}
				if( this.focused.className.match(/^(image|note1|note2|note3)$/) ){
					if( [33,34,35,36,37,38,39,40,9].indexOf( e.keyCode ) == -1 ){
						e.preventDefault();e.stopPropagation();
					}
				}
				if( this.focused.className.match(/^(image_caption)$/) ){
					if( [13,10,9].indexOf( e.keyCode ) != -1 || e.ctrlKey ){
						e.preventDefault();e.stopPropagation();
					}
				}
				console.log( "keydown: " + this.focused.nodeName + ": " +  e.keyCode + (e.ctrlKey?" CTRLS ":"") + (e.shiftKey?" Shift ":"") );
				if( this.focused.nodeName == "PRE" ){
					this.pre_keydown2(e);
					return false;
				}
				if( e.keyCode == 8 ){ //backspace
					if( this.focused.nodeName == "P" || this.focused.nodeName == "DIV" ){
						if( this.focused.innerHTML.trim().toLowerCase() == "<br>" || this.focused.innerHTML.trim() == "" || this.focused.innerHTML.trim() == "&nbsp;" ){
							e.preventDefault();
							this.focused.remove();
						}
					}
				}
				if( e.keyCode == 46 ){ //delete
					if( this.td_sel_cnt > 1 ){
						e.preventDefault();
						this.td_del_cells();
					}else if( this.sections_list.length > 1 ){
						return false;
						e.preventDefault();
						if( confirm("Are you sure to delete?") ){
							this.selection_to_clipboard();
							this.selection_to_delete();
						}
					}else{
						if( this.focused.nodeName == "P" || this.focused.nodeName == "DIV" ){
							if( this.focused.innerHTML.trim().toLowerCase() == "<br>" || this.focused.innerHTML.trim() == "" || this.focused.innerHTML.trim() == "&nbsp;" ){
								e.preventDefault();
								this.focused.remove();
							}
						}
					}
				}
				if( e.keyCode == 67 && e.ctrlKey ){ // ctrl + C
					if( this.focused_table && this.td_sel_cnt > 1 ){
						this.tdsel_copy_cells();
					}else{
						console.log("no sections selection for copy");
					}
				}
				if( e.keyCode == 88 && e.ctrlKey ){  // ctrl + X
					if( this.focused_table && this.td_sel_cnt > 1 ){
						e.preventDefault();e.stopPropagation();
						this.tdsel_copy_cells();
						this.td_del_cells();
					}else if( this.sections_selected ){
						return false;
					}else{
						console.log("no sections selection for cut");
					}
				}
				if( e.keyCode == 86 && e.ctrlKey ){ // ctrl + V paste
					//this.onpaste(e);
					if( e.shiftKey ){
						this.paste_shift = true;
					}
				}
				if( e.keyCode == 9 ){ // tab
					if( this.sections_selected ){
						e.preventDefault();
						if( e.shiftKey ){
							this.make_unindent();
						}else{
							this.make_indent();
						}
					}else{ // tab in editable
						console.log( "tab in editable: " + this.focused.nodeName );
						e.preventDefault();
						if( this.focused_li ){
							if( e.shiftKey ){
								var li = this.focused_li;
								var ul = li.parentNode;
								var parent = ul.parentNode;
								var parent_li = false;
								if( parent.nodeName == "LI" ){
									parent_li = parent;
								}else if( parent.paretNode.nodeName == "LI" ){
									parent_li = parent.parentNode;
								}
								if( parent_li ){
										if( li.previousElementSibling == null ){
											parent_li.insertAdjacentElement("afterend", li);
											if( ul.children.length == 0 ){
												ul.remove();
											}else{
												li.appendChild( ul );
											}
											this.select_range_with_element( li );
										}else if( li.nextElementSibling == null ){
											parent_li.insertAdjacentElement("afterend", li);
											if( ul.children.length == 0 ){
												ul.remove();
											}
											this.select_range_with_element( li );
										}else{
											var vi = Array.from(ul.children).indexOf( li );
											parent_li.insertAdjacentElement("afterend", li);
											if( (Number(ul.children.length)-1) >= vi ){
												var vl = this.frame.document.createElement("UL");
												while( ul.children.length-1 >= vi ){
														vl.appendChild( ul.children[vi] );
												}
												li.appendChild( vl );
											}
										}
								}else{

								}
							}else{
								if( this.focused_li.previousElementSibling ){
									var k = this.focused_li;
									var kv = this.focused_li.previousElementSibling;
									var f = false;
									if( kv.childNodes[ kv.childNodes.length-1 ].nodeName == "#text" ){
										if( kv.childNodes.length > 1 ){
											if( kv.childNodes[ kv.childNodes.length-2 ].nodeName == "UL" ){
												var kv = kv.childNodes[ kv.childNodes.length-2 ];
												f = true;
											}
										}
									}else if( kv.childNodes[ kv.childNodes.length-1 ].nodeName == "UL" ){
										var kv = kv.childNodes[ kv.childNodes.length-1 ];
										f = true;
									}
									if( f ){
										kv.appendChild( k );
										this.select_range_with_element( k );
									}else{
										var vul = this.frame.document.createElement("ul");
										this.focused_li.previousElementSibling.appendChild( vul );
										vul.appendChild( k );
										this.select_range_with_element( k );
									}
								}
							}
						}else if( this.focused_td ){
							if( e.shiftKey ){
								if( this.focused_td.previousElementSibling ){
									this.select_range_with_element( this.focused_td.previousElementSibling );
								}else{
									if( this.focused_tr.previousElementSibling ){
										this.select_range_with_element( this.focused_tr.previousElementSibling.children[ this.focused_tr.previousElementSibling.children.length-1 ] );
									}
								}
							}else{
								if( this.focused_td.nextElementSibling ){
									this.select_range_with_element( this.focused_td.nextElementSibling );
								}else{
									if( this.focused_tr.nextElementSibling ){
										this.select_range_with_element( this.focused_tr.nextElementSibling.children[0] );
									}else{
										var cnt = this.focused_tr.children.length;
										var vtr = this.frame.document.createElement("tr");
										for(var i=0;i<cnt;i++){
											var vtd = this.frame.document.createElement("td");
											vtr.appendChild(vtd);
										}
										this.focused_tr.insertAdjacentElement("afterend",vtr);
										this.select_range_with_element( vtr.children[0] );
									}
								}
							}
							//setTimeout(this.initialize_tables,100);
						}else{
							console.log("Tab unhandled:");
						}
					}
					return false;
				}
				if( e.keyCode == 13 && e.shiftKey == false ){
					if( this.focused.className.match(/^(image_caption|image|note1|note2|note3)$/) ){
						e.preventDefault();e.stopPropagation();
					}else{
						setTimeout(this.check_after_enter,50);
					}
				}
			}},
			keyup: function(e){if( this.enabled ){
				setTimeout(this.keyup2,10,e);
			}},
			keyup2: function(e){
				// top , bottom, left, right
				//console.log( "keyup2:" + e.keyCode );
				if( e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 39 ){
					setTimeout(this.selectionchange2,50)
				}
				this.focused_block_set_bounds();
			},
			selected_lis_to_indent: function( shiftkey ){
				var is_all_lis = true;
				for(var i=0;i<this.sections_list.length;i++){
					if( this.sections_list[i].nodeName == "#text" ){
						if( this.sections_list[i].data.match(/^[\t\r\n]+$/) ){
							this.sections_list[i].remove();
							this.sections_list.splice(i,1);
							i--;
							continue;
						}
					}
					if( this.sections_list[i].nodeName != "LI" ){
						is_all_lis = false;
					}
				}
				if( is_all_lis ){
					{
						var lis = this.sections_list;
						var parent_ul = lis[0].parentNode;
						var parent_section = parent_ul.parentNode;
						if( shiftkey == true ){
							if( lis[0].previousElementSibling == null && lis[ lis.length-1 ].nextElementSibling == null ){
								//it is total UL
								this.ul_change_to_text();
							}else if( lis[ lis.length-1 ].nextElementSibling == null ){
								console.log( 22 );
								var nodelist = [];
								if( parent_section.nodeName == "LI" ){
									for( var i=0;i<lis.length;i++){
										var kv = lis[i];
										parent_section.insertAdjacentElement( "afterend", kv );
										parent_section = kv;
										nodelist.push( kv );
									}
								}else{
									for( var i=0;i<lis.length;i++){
										var vl = this.frame.document.createElement("p");
										vl.innerHTML = lis[i].innerHTML;
										lis[i].remove()
										parent_ul.insertAdjacentElement( "afterend", vl );
										parent_ul = vl;
										nodelist.push( vl );
									}
								}
								this.select_elements( nodelist );
								setTimeout(this.selectionchange2,50);
							}else if( lis[ 0 ].previousElementSibling == null ){
								console.log( 33 );
								//need to insert an UL between li elements
								var nodelist = [];
								if( parent_section.nodeName == "LI" ){
									while( lis.length ){
										var kv = lis[0];
										parent_section.insertAdjacentElement( "afterend", kv );
										parent_section = kv;
										nodelist.push( kv );
										lis.splice(0,1);
									}
									parent_section.appendChild( parent_ul );
								}else{
									for( var i=0;i<lis.length;i++){
										var vl = this.frame.document.createElement("p");
										vl.innerHTML = lis[i].innerHTML;
										lis[i].remove();
										parent_ul.insertAdjacentElement( "afterend", vl );
										parent_ul = vl;
										nodelist.push( vl );
									}
								}
								this.select_elements( nodelist );
								setTimeout(this.selectionchange2,50);
							}else{
								console.log( 44 );
								var nodelist = [];
								for( var i=0;i<lis.length;i++){
									nodelist.push( lis[i] );
								}
								var newul = this.frame.document.createElement("UL");
								while( lis[ lis.length-1 ].nextElementSibling ){
									newul.appendChild( lis[ lis.length-1 ].nextElementSibling );
								}
								//parentul.insertAdjacentElement("afterend", newel);
								var new_nodes = [];
								if( parent_section.nodeName == "LI" ){
									while( nodelist.length ){
										parent_section.insertAdjacentElement("afterend", nodelist[0]);
										parent_section = nodelist[0];
										new_nodes.push( nodelist[0] );
										nodelist.splice(0,1);
									}
									parent_section.appendChild( newul );
								}else{
									while( nodelist.length ){
										var vl = this.frame.document.createElement("p");
										vl.innerHTML = nodelist[0].innerHTML;
										nodelist[0].remove();
										parent_ul.insertAdjacentElement("afterend", vl);
										parent_ul = vl;
										new_nodes.push( vl );
										nodelist.splice(0,1);
									}
									parent_ul.insertAdjacentElement("afterend", newul);
								}
								this.select_elements( new_nodes );
								setTimeout(this.selectionchange2,50);
							}
						}else{
							console.log("doing indent");
							if( lis[0].previousElementSibling ){
								var prev_li = lis[0].previousElementSibling;
								var f = false;
								if( prev_li.childNodes[ prev_li.childNodes.length-1 ].nodeName == "#text" ){
									if( prev_li.childNodes.length > 1 ){
										if( prev_li.childNodes[ prev_li.childNodes.length-2 ].nodeName == "UL" ){
											prev_li = prev_li.childNodes[ prev_li.childNodes.length-2 ];
											f = true;
										}
									}
								}else if( prev_li.childNodes[ prev_li.childNodes.length-1 ].nodeName == "UL" ){
									prev_li = prev_li.childNodes[ prev_li.childNodes.length-1 ];
									f = true;
								}
								if( f ){
									var new_ul = prev_li;
								}else{
									var new_ul = this.frame.document.createElement("ul");
									prev_li.appendChild( new_ul );
								}
								for( var i=0;i<lis.length;i++){
									new_ul.appendChild( lis[i] );
								}
								this.select_sections(lis);
								setTimeout(this.selectionchange2,50);
							}else{
								console.log("Selection start has no previous LI element");
							}
						}
					}
				}else{
					console.log("selection has non LI elements");
				}
			},
			selection_to_clipboard: function(){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				console.log( "Copy: " + sr.commonAncestorContainer.nodeName );
				var h = sr.cloneContents();
				var vnn = this.frame.document.createElement("div");
				vnn.appendChild( h );
				delete( vnn );
				const blob = new Blob([vnn.innerHTML], { type: "text/html" });
				var txt = vnn.innerText;
				var txt2 = "";
				for(var i=0;i<txt.length;i++){ if( txt.charCodeAt(i) < 126 ){ txt2 = txt2+ txt.substr(i,1); } }
				const blob2 = new Blob([txt2], { type: "text/plain" });
				const richTextInput = new ClipboardItem({ "text/html": blob, "text/plain": blob2 });
				navigator.clipboard.write([richTextInput]);
				console.log("Selection copied");
			},
			selection_to_delete: function(){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				sr.deleteContents();
			},
			find_root_sections_list: function(){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				var v = sr.startContainer;
				var start_vid = "";
				var cnt = 0;
				while( 1 ){
					if( cnt > 20 ){console.log("loop1 end");return false;}cnt++;
					if( v.nodeName != "#text" ){
					if( v.parentNode.hasAttribute("data-id") ){
						if( v.parentNode.getAttribute("data-id", "root") ){
							start_vid = v;
							break;
						}
					}
					}
					v = v.parentNode;
				}
				var v = sr.endContainer;
				var end_vid = "";
				var cnt = 0;
				while( 1 ){
					if( cnt > 20 ){console.log("loop2 end");return false;}cnt++;
					if( v.nodeName != "#text" ){
					if( "hasAttribute" in v.parentNode == false ){
						return false;
					}else{
						if( v.parentNode.hasAttribute("data-id") ){
							if( v.parentNode.getAttribute("data-id", "root") ){
								end_vid = v;
								break;
							}
						}
					}
					}
					v = v.parentNode;
				}
				var vids = [];
				vids.push( start_vid.id );
				var v = start_vid.nextElementSibling;
				var cnt = 0;
				if( start_vid != end_vid ){
					while( v != end_vid ){
						if( v.nodeName != "#text" ){
							vids.push( v.id );
						}
						if( v.nextElementSibling ){
							v = v.nextElementSibling;
						}else{
							console.log( v );
							console.log( "loop3 error" );
							return false;
						}
						if( cnt > 20 ){console.log("loop3 end");return false;}
						cnt++;
					}
				}
				vids.push( end_vid.id );
				return vids;
			},
			move_focused: function( vi ){

			},
			change_focused: function( v ){

			},
			clickdoc: function(e){if( this.enabled ){
				setTimeout(this.clickdoc2,100,e);
			}},
			clickdoc2: function(e){
				//console.log( "clickdoc2");
				var isiteditor = false;
				if( "target" in e ==false ){
					console.log("clickdoc2 error in e.target:  ");
					console.log( e );
					return false;
				}
				if( this.image_popup || this.settings_menu  || this.anchor_menu ){return false;}
				var is_in_editor = this.is_target_in_editor( e.target );
				if( is_in_editor == "editor" ){
				}else if( is_in_editor == "bounds" ){
				}else{
					this.unset_focused();
					this.contextmenu_hide();
				}
			},
			clickit: function( e ){if( this.enabled ){
				console.log("clickit:");
				this.contextmenu_hide();
				var sel = this.frame.document.getSelection();
				if( sel.rangeCount ){
					var sr = sel.getRangeAt(0);
					if( sr.collapsed == false ){
						return false;
					}
				}
				this.hide_other_menus();
				this.show_toolbar = true;
				if( e.target.nodeName == "IMG" ){
					this.set_focused( e.target );
					//this.contextmenu = true;
					//this.contextmenu_set_style( e.target );
				}else{
					this.set_focused();
					if( this.focused_anchor ){
						this.show_anchor_menu( this.focused_anchor );
					}
				}
			}},
			unset_focused: function( vanchor = false ){
				this.focused= false;
				this.focused_type= "";
				this.focused_block_type= "";
				this.focused_block= false;
				this.focused_table= false;
				if( vanchor == false ){
					this.focused_anchor= false;
				}
				this.focused_td= false;
				this.focused_tr= false;
				this.focused_table= false;
				this.focused_li= false;
				this.focused_ul= false;
				this.focused_img= false;
				this.hide_bounds();
			},
			hide_bounds: function(){
				this.vml= "visibility: hidden;";this.vmr= "visibility: hidden;";this.vmt="visibility: hidden;";this.vmb="visibility: hidden;";this.vmtip="visibility: hidden;";
				this.vmttt= "visibility: hidden;";
			},
			set_focused: function( vtarget = false ){
				var vfromkeydown = false;
				var is_sel = false;
				if( vtarget == "fromkeydown" ){
					vfromkeydown = true;
					vtarget = false;
				}
				if( vtarget == false ){
					if( this.frame.document.getSelection().rangeCount == 0 ){
						this.show_toolbar = false;
						this.hide_other_menus();
						return false;
					}
					var sr = this.frame.document.getSelection().getRangeAt(0);
					is_sel = !sr.collapsed;
					var v = false;
					if( sr.startContainer.nodeName == "#text" ){
						v = sr.startContainer.parentNode;
					}else{
						v = sr.startContainer;
					}
				}else{
					console.log("set focused with target: " + vtarget.nodeName);
					v = vtarget;
					if( v.nodeName == "#text" ){
						v = v.parentNode;
					}
				}
				var cnt = 0;
				while( 1 ){cnt++;if( cnt>3 ){console.error("focuselement + 3");break;}
					if( v.nodeName == "A" ){
						this.focused_anchor = v;
					}
					if( v.nodeName.match(/^(H1|H2|H3|H4|P|TD|TH|PRE|DIV|LI|IMG|TABLE)$/i) ){
						break;
					}
					v = v.parentNode;
				}
				if( vfromkeydown ){
					if( this.focused == v ){
						setTimeout(this.focused_block_set_bounds,50);
						return false;
					}
				}
				if( v.hasAttribute("data-id") ){
					if( v.getAttribute("data-id") == "root" ){

					}
				}
				{
					this.unset_focused(this.focused_anchor);
					this.focused = v;
					this.focused_type = this.focused.nodeName;
					if( this.focused.nodeName == "IMG" ){
						this.focused_img = this.focused;
						this.image_url = this.focused_img.src+'';
					}
					if( this.focused.nodeName == "A" ){
						this.focused_anchor = this.focused;
					}
					if( this.focused.nodeName == "TD" || this.focused.nodeName == "TH" ){
						this.focused_td = this.focused;
						this.focused_tr = this.focused.parentNode;
						this.focused_table = this.focused_tr.parentNode.parentNode;
						setTimeout(this.td_settings_read,50);
						setTimeout(this.table_settings_read,50);
					}
					if( this.focused.nodeName == "LI" ){
						this.focused_li = this.focused;
						this.focused_ul = this.focused.parentNode;
						this.ul_type = (this.focused_ul.className?this.focused_ul.className:"list-style-disc");
					}
					this.focused_block = false;
					this.focused_block_type = "";
					if( this.focused.className.match(/^(note1|note2|note3)$/) ){
						this.focused_block = this.focused.parentNode;
						this.focused_block_type = "NOTE";
					}
					if( this.focused.hasAttribute("data-block-type") ){
						if( this.focused.getAttribute("data-block-type") ){
							this.focused_block = this.focused;
							this.focused_block_type = this.focused.getAttribute("data-block-type");
							if( this.focused_block_type == "IMAGE" ){
								//this.focused_block.setAttribute("contenteditable", "false");
								//this.frame.document.getSelection().setBaseAndExtent( this.focused.nextElementSibling, 0, this.focused.nextElementSibling, 0 );
							}
							if( this.focused_block_type == "NOTE" ){
								this.notetype = this.focused_block.className;
							}
							if( this.focused_block_type == "QUOTE" ){
								this.quotetype = this.focused_block.className;
							}
						}
					}
					var v = this.focused.parentNode;
					var cnt=0;
					while(1){cnt++;if(cnt>4){break;}
						if( "hasAttribute" in v == false ){break;}
						if( v.hasAttribute("data-id") ){
							break;
						}
						if( v.nodeName.match( /^(TD|TH)$/ ) ){
							if( this.focused_td == false ){
								this.focused_td = v;
								this.focused_tr = v.parentNode;
								this.focused_table = v.parentNode.parentNode.parentNode;
							}
						}
						if( v.nodeName.match( /^(LI)$/ ) ){
							if( this.focused_li == false ){
								this.focused_li = v;
								this.focused_ul = v.parentNode;
								this.ul_type = (this.focused_ul.className?this.focused_ul.className:"list-style-disc");
							}
						}
						if( v.className.match(/^(note1|note2|note3)$/) ){
							this.focused_block = v.parentNode;
							this.focused_block_type = "NOTE";
							break;
						}
						if( v.hasAttribute("data-block-type") ){
							if( v.getAttribute("data-block-type") ){
								this.focused_block = v;
								this.focused_block_type = v.getAttribute("data-block-type");
								if( this.focused_block_type == "IMAGE" ){

								}
								if( this.focused_block_type == "NOTE" ){
									this.notetype = this.focused_block.className;
								}
								if( this.focused_block_type == "QUOTE" ){
									this.quotetype = this.focused_block.className;
								}
							}
						}
						v = v.parentNode;
					}
				}
				if( is_sel == false ){
					this.focused_block_set_bounds();
				}
			},
			create_block: function(pos){
				if( pos == 't' ){pos = "beforebegin";}
				if( pos == 'b' ){pos = "afterend";}
				if( this.focused_block ){
					var vl = this.frame.document.createElement("p");
					vl.innerHTML = "&nbsp;";
					this.focused_block.insertAdjacentElement( pos, vl );
					this.select_element_text(vl);
				}else{
					if( this.focused.nodeName == "LI" ){
						var vl = this.frame.document.createElement("li");
						vl.innerHTML = "&nbsp;";
						this.focused.insertAdjacentElement( pos, vl );
						this.select_element_text(vl);
					}else{
						var vl = this.frame.document.createElement("p");
						vl.innerHTML = "&nbsp;";
						this.focused.insertAdjacentElement( pos, vl );
						this.select_element_text(vl);
					}
				}
				this.hide_bounds();
				setTimeout(this.selectionchange2,50);
			},
			create_block_bottom: function(){

			},
			focused_block_set_bounds: function(){
				if( this.focused_block ){
					v = this.focused_block.getBoundingClientRect();
				}else{
					if( this.focused.nodeName.match( /^(TD|TH)$/ ) ){
						return false;
					}
					v = this.focused.getBoundingClientRect();
				}
				var sy = Number(this.frame.scrollY);
				var sx = Number(this.frame.scrollX);
				var l=Number(v.left);var t=Number(v.top); var w=Number(v.width); var h=Number(v.height); var b=Number(v.bottom); var r=Number(v.right);
				// this.vmt = "height:2px;width:"+(w+4)+"px;top:"+(t+sy-2)+"px;left:"+(l+sx-2)+"px";
				// this.vmb = "height:2px;width:"+(w+4)+"px;top:"+(b+sy-2)+"px;left:"+(l+sx-2)+"px";
				// this.vmtip = "top:"+(t+sy-25)+"px;left:"+(r+sx+25)+"px";
				this.vmttt = "top:"+(t+sy)+"px;left:"+(l+sx)+"px;width:"+(w)+"px;height:"+(h)+"px";
			},
			image_delete: function(){

			},
			image_action: function(v, a){
				var img_block = false;
				if( this.focused_block_type == "IMAGE" ){
					img_block = this.focused_block;
				}
				if( v == 'edit' ){
					this.hide_other_menus();
					setTimeout(this.show_image_update_popup,50);
				}
				if( v == 'remove' ){
					if( confirm("Are you sure to delete this image?") ){
						if( img_block ){
							img_block.remove();
						}else if( this.focused_img ){
							this.focused_img.remove();
						}
						this.unset_focused();
						this.set_focused();
					}
				}
				if( !img_block ){ return false;}
				if( v == 'align' ){
					img_block.setAttribute("data-im", a);
					this.image_inline_mode = a;
					if( a == 'left' || a== 'right' ){
						img_block.setAttribute("data-isf",'small');
						img_block.removeAttribute("data-is");
						this.image_inline_sizef = 'small';
					}else{
						img_block.removeAttribute("data-isf");
						img_block.setAttribute("data-is", "medium");
						this.image_inline_size = 'medium';
					}
				}
				if( v == 'size' ){
					img_block.setAttribute("data-is", a);
					this.image_inline_size = a;
				}
				if( v == 'sizef' ){
					img_block.setAttribute("data-isf", a);
					this.image_inline_sizef = a;
					this.image_inline_size = 'large';
				}
				if( v == 'caption' ){
					var k = img_block.getElementsByClassName("image_caption");
					if( k.length ){ k[0].setAttribute("data-display", a); }
					this.image_inline_caption = a;
				}
			},
			delete_focused_img: function(){
				if( this.focused_img ){
					this.focused_img.remove();
					this.selectionchange2();
				}
			},
			update_focused_img: function(){
				if( this.focused_img ){
					this.focused_img.src = this.image_url+'';
				}
			},
			focused_img_to_block: function(){
				this.focused_img.insertAdjacentElement("afterend", this.get_image_html());
				this.focused_img.remove();
				this.selectionchange2();
			},
			focused_img_block_to_inline: function(){
				var vimg = this.frame.document.createElement("IMG");
				vimg.src = this.image_url+'';
				this.focused_block.insertAdjacentElement("afterend", vimg);
				this.focused_block.remove();
				this.selectionchange2();
			},
			show_anchor_menu: function(v){
				this.anchor = v;
				this.anchor.innerText = this.anchor.innerText;
				this.anchor_href = v.getAttribute("href");
				this.anchor_text = v.innerHTML;
				var r = v.getBoundingClientRect();
				var s = Number(window.scrollY);
				this.anchor_menu_style = "top:"+(Number(r.bottom)+s)+"px;left:"+(Number(r.left)+20)+"px";
				this.anchor_form = false;
				this.anchor_menu = true;
			},
			anchor_apply_changes: function(){
				if( this.anchor ){
					this.anchor.setAttribute("href", this.anchor_href);
					this.anchor.innerHTML = this.anchor_text;
				}else if( this.anchor_at_range ){
					var a = this.frame.document.createElement("a");
					a.innerHTML = this.anchor_text+'';
					a.setAttribute("href", this.anchor_href+'');
					var sel = this.frame.document.getSelection();
					sel.removeAllRanges();
					sel.addRange(this.anchor_at_range);
					var sr = this.frame.document.getSelection().getRangeAt(0);
					sr.deleteContents();
					sr.insertNode( a );
					sel.collapseToStart();
					a.focus();
				}
				this.anchor_menu = false;
				this.link_suggest= false;
				this.link_suggest_list = [];
			},
			anchor_change: function(){

			},
			anchor_remove: function(){
				this.anchor_menu = false;
				this.anchor.outerHTML = this.anchor.innerHTML;
			},
			close_pre_edit_popup: function(){
				this.pre_edit_popup = false;
			},
			pre_keydown2: function(e){
				if( e.keyCode == 13 || e.keyCode == 10 ){
					e.preventDefault();e.stopPropagation();
					setTimeout(this.pre_enter_indent2,50,e);
				}
				if( e.keyCode == 66 && e.ctrlKey ){
					e.preventDefault();
					return false;
				}
				if( e.keyCode == 9 ){
					e.preventDefault();e.stopPropagation();
					var sr = this.frame.document.getSelection().getRangeAt(0);
					if( sr.startContainer.nodeName == "#text" && sr.endContainer.nodeName == "#text" && sr.startContainer == sr.endContainer ){
						var sc = sr.startContainer;
						var st = sr.startOffset;
						var en = sr.endOffset;
						if( (en-st) == 0 ){
							var t1 = sc.nodeValue.substr(0,st);
							var t2 = sc.nodeValue.substr(st,99999);
							sc.data = t1 + "\t" + t2;
							var sr = new Range();
							sr.setStart(sc, st+1);
							sr.setEnd(sc, st+1);
							var sel = this.frame.document.getSelection();
							sel.removeAllRanges();
							sel.addRange(sr);
						}else{
							var txt = sr.startContainer.nodeValue;
							var t = txt.substr(st, (en-st) );
							var l = t.split(/[\r\n]+/g);
							for(var i=0;i<l.length;i++){
								if( e.shiftKey ){
									l[i] = l[i].replace(/(\t|[\ ]{1,4})/, "");
								}else{
									l[i] = "\t" + l[i];
								}
							}
							var newtext = l.join('\n');
							var d = newtext.length-t.length;
							en = en + d;
							var sr = this.frame.document.getSelection().getRangeAt(0);
							var sc = sr.startContainer;
							sc.data = txt.replace(t, newtext);
							var sr = new Range();
							sr.setStart(sc, st);
							sr.setEnd(sc, en);
							var sel = this.frame.document.getSelection();
							sel.removeAllRanges();
							sel.addRange(sr);
						}
					}
				}
			},
			pre_enter_indent2: function( e ){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				if( sr.startContainer.nodeName =="#text" && sr.endContainer.nodeName =="#text" && sr.startContainer == sr.endContainer ){
					var st = sr.startOffset;
					var en = sr.endOffset;
					var sc = sr.startContainer;
					var tb = sc.nodeValue.substr(0, st);
					var tb2 = sc.nodeValue.substr(st, 999999);
					var l = tb.split(/[\r\n]+/g);
					var ml= 0;
					if( l.length > 0 ){
						var m = l[ l.length-1 ].match(/^[\t\ ]+/);
						if( m ){
							sc.data = tb + "\n" + m[0] + tb2;
							ml = m[0].length;
						}else{
							sc.data = tb + "\n" + tb2;
							ml = 0;
						}
					}else{
						sc.data = tb + "\n" + tb2;
						ml = 1;
					}
					console.log( sc.data.replace(/\n/g, "---") );
					var sr = this.frame.document.getSelection().getRangeAt(0);
					var sc = sr.startContainer;
					var sr = new Range();
					var e2 = st+ml+1;
					if( sc.nodeValue.length < e2 ){
						e2 = sc.nodeValue.length-1;
					}
					sr.setStart( sc, e2 );
					sr.setEnd( sc, e2 );
					var sel = this.frame.document.getSelection();
					sel.removeAllRanges();
					sel.addRange(sr);
				}
			},
			pre_insert_text: function(e,d){
				var sr = this.frame.document.getSelection().getRangeAt(0);
				var sc = sr.startContainer;
				var st = sr.startOffset;
				var en = sr.endOffset;
				if( sc.nodeName == "PRE" ){
					sc.innerHTML = d;
				}else{
					var t1 = sc.nodeValue.substr(0,st);
					var t2 = sc.nodeValue.substr(en,99999);
					sc.data = t1 + d + t2;
					var sr = new Range();
					sr.setStart(sc, st);
					sr.setEnd(sc, st+d.length);
					var sel = this.frame.document.getSelection();
					sel.removeAllRanges();
					sel.addRange(sr);
					e.target.focus();
				}
			},
			clean_html: function(h){
				var m = h.match(/v\-[0-9]+\-[0-9]+/g);
				if( m ){
					for(var i=0;i<m.length;i++){
						h = h.replace( m[i], this.randid() );
					}
				}
				h = h.replace(/contenteditable[\=\Wtrue]+/g, " ");
				h = h.replace(/data\-focused[\=\Wtrue]+/g, " ");
				return h;
			},
			onpaste: function( e ){
				cp = e.clipboardData || window.clipboardData;

				if( this.paste_shift ){
					if( e.target.hasAttribute("contenteditable" ) ){
						e.preventDefault();
						console.log("Shift Ctrl V : pasting as text");
						var d= cp.getData("Text");
						this.frame.document.execCommand("insertText", false,d );
						this.paste_shift = false;
						return false;
					}
				}
				var types = {};
				for( var i=0;i<cp.items.length;i++ ){
					types[ cp.items[i].type ] = i;
				}
				this.echo__(types);
				if( e.target.nodeName == "PRE" ){
					var d = cp.getData('Text');
					e.preventDefault();
					this.pre_insert_text(e, d );
				}else{
					var is_img_found = false;
					if( "image/jpeg" in types ){
						is_img_found = "image/jpeg";
					}else if( "image/svg+xml" in types ){
						is_img_found = "image/svg+xml";
					}else if( "image/png" in types ){
						is_img_found = "image/png";
					}
					if( "text/html" in types ){
						var d = cp.getData('text/html');
						var d = this.clean_html( cleanpasted( d ) );
						var vsections = check_article_body_parts( d );
						var v1 = e.target;
						if( v1.nodeName == "#text" ){
							v1 = v1.parentNode;
							if( v1.hasAttribute("data-id") ){
								if( v1.getAttribute("data-id") == "root" ){
									v1 = e.target.previousElementSibling;
								}
							}
						}
						if( v1.nodeName.match(/^(P|LI|TD|TH|PRE|DIV|H1|H2|H3|H4|H5|TABLE)$/) == null ){
							v1 = v1.parentNode;
						}
						if( v1.nodeName.match(/^(P|LI|TD|TH|PRE|DIV|H1|H2|H3|H4|H5|TABLE)$/) == null ){
							v1 = v1.parentNode;
						}
						var isitli = (v1.nodeName == "LI"?v1:false)
						if( isitli == false ){
							isitli = (v1.parentNode.nodeName == "LI")?v1.parentNode:false;
						}
						var isittd = (v1.nodeName.match(/^(TD|TH)$/)?v1:false);
						if( isittd == false ){
							isittd = (v1.parentNode.nodeName.match(/^(TD|TH)$/))?v1.parentNode:false;
						}
						var iscontentli = false;
						if( vsections.length==1 && vsections[0].match(/[\>\<]/) == null ){
							console.log("skipping to natural paste");
							e.preventDefault();
							e.stopPropagation();
							this.frame.document.execCommand("insertText", false, vsections[0]);
							return false;
						}
						e.preventDefault();
						this.echo__( vsections );
						if( vsections.length==1 && vsections[0].substr(0,3).toLowerCase() == "<ul" ){
							var vnew_ul = this.frame.document.createElement("div");
							vnew_ul.innerHTML = vsections[0].replace(/[\r\n\t]+/g,"");;
							var vnew_lis = vnew_ul.getElementsByTagName("LI");
							for(var i=0;i<vnew_lis.length;i++){
								if( isitli ){
									isitli.insertAdjacentElement( "afterend", vnew_lis[i] );
								}else if( v1.nodeName.match( /^(TD|TH)$/ ) ){
									v1.appendChild( vnew_ul );
								}else{
									v1.insertAdjacentElement( "afterend", vnew_ul );
								}
							}
						}else if( vsections.length==1 && vsections[0].substr(0,6).toLowerCase() == "<table" ){

							var vs = vsections[0].replace(/[\r\n\t]+/g,"");
							var newl = this.frame.document.createElement("div");
							newl.innerHTML = vs;
							newtable = newl.children[0];
							this.clean_html_table( newtable );

							if( this.focused_td ){
								console.log("33333");
								this.td_paste_cells(newtable);
								newl.remove();
							}else{
								this.initialize_table(newtable);
								v1.insertAdjacentElement( "afterend", newtable );
								newl.remove();
							}
						}else{
							for(var i=0;i<vsections.length;i++){
								var newl = this.frame.document.createElement("p");
								//newl.innerHTML = vsections[i].replace(/[\r\n\t]+/g,"");
								newl.innerHTML = vsections[i];
								if( isittd || isitli ){
									while( newl.childNodes.length ){
										if( newl.childNodes[0].nodeName != "PRE" && newl.childNodes[0].nodeName != "#text" ){
											newl.childNodes[0].innerHTML = newl.childNodes[0].innerHTML.replace( /[\r\n\t]+/g, "" );
										}
										if( newl.childNodes[0].nodeName.match(/^(UL|OL|P|DIV|H1|H2|H3|H4|PRE)$/) ){
											var v2 = newl.childNodes[0];
											v1.appendChild( v2 );
										}else if( newl.childNodes[0].nodeName.match(/^(A)$/) ){
											var v2 = newl.childNodes[0];
											var vln = this.frame.document.createElement("p");
											vln.appendChild( newl.childNodes[0] );
											v1.appendChild( vln );
										}else if( newl.childNodes[0].nodeName == "#text" ){
											if( newl.childNodes[ 0 ].data.trim() != "" ){
												newl.childNodes[ 0 ].data = newl.childNodes[ 0 ].data.trim();
												var v2 = this.frame.document.createElement("p");
												v2.appendChild( newl.childNodes[0] );
												v1.appendChild( v2 );
											}else{
												newl.childNodes[0].remove();
											}
										}else if( newl.childNodes[0].nodeName == "IMG" ){
											var v2 = this.get_image_html(newl.childNodes[0]);
											v1.appendChild( v2 );
										}else if( newl.childNodes[0].nodeName == "TABLE" ){
											var newtable = newl.childNodes[0];
											this.clean_html_table( newtable );
											v1.appendChild( newtable );
											this.initialize_table( newtable );
										}else{
											console.log( "skipping pasting unknown tag" );
											console.log( newl.childNodes[0] );
											newl.childNodes[0].remove();
										}
									}
								}else{
									while( newl.childNodes.length ){
										if( newl.childNodes[0].nodeName != "PRE" && newl.childNodes[0].nodeName != "#text" ){
											newl.childNodes[0].innerHTML = newl.childNodes[0].innerHTML.replace( /[\r\n\t]+/g, "" );
										}
										if( newl.childNodes[0].nodeName.match(/^(UL|OL|P|DIV|H1|H2|H3|H4|PRE)$/) ){
											var v2 = newl.childNodes[0];
											v1.insertAdjacentElement("afterend", v2 );
											v1 = v2;
										}else if( newl.childNodes[0].nodeName.match(/^(A)$/) ){
											var v2 = newl.childNodes[0];
											var vln = this.frame.document.createElement("p");
											vln.appendChild( newl.childNodes[0] );
											v1.insertAdjacentElement("afterend", vln );
										}else if( newl.childNodes[0].nodeName == "#text" ){
											if( newl.childNodes[0].data.trim() != "" ){
												newl.childNodes[0].data = newl.childNodes[0].data.trim();
												var v2 = this.frame.document.createElement("p");
												v2.appendChild( newl.childNodes[0] );
												v1.insertAdjacentElement("afterend", v2 );
												v1 = v2;
											}else{
												newl.childNodes[0].remove();
											}
										}else if( newl.childNodes[0].nodeName == "IMG" ){
											var v2 = this.get_image_html(newl.childNodes[0]);
											v1.insertAdjacentElement("afterend", v2 );
										}else if( newl.childNodes[0].nodeName == "TABLE" ){
											var newtable = newl.childNodes[0];
											this.clean_html_table( newtable );
											v1.insertAdjacentElement("afterend", newtable );
											this.initialize_table( newtable );
										}else{
											console.log( "skipping pasting unknown tag" );
											console.log( newl.childNodes[0] );
											newl.childNodes[0].remove();
										}
									}
								}
							}
						}
						//this.frame.document.execCommand("insertHTML", false, d );
					}else if( is_img_found ){
						e.preventDefault();
						var v = e.target;
						var loopcnt = 0;
						var isok = false;
						while(1){loopcnt++;if(loopcnt>20){break;}
							if( v.nodeName.match(/^(#document|BODY|HTML)$/) ){
								isok = false; break;
							}
							if( v.nodeName.match(/^(P|LI|TD|TH|DIV)$/) ){
								if( v.hasAttribute('data-id') ){
									if( v.getAttribute('data-id') == "root" ){
										isok = false;break;
									}
								}
								isok = true;
								break;
							}
							v = v.parentNode;
						}
						if( isok ){
							//var imgdata = cp.getData(is_img_found);
							//console.log( imgdata );
							if( v.className == "popup_drop"){

							}else{
							this.image_at = v;
							this.image_at_pos = 'b';
							}
							if( is_img_found == "image/svg+xml"){
								console.error("Unhandled file type: " + is_img_found );
								return false;
							}else{
								var blob = cp.items[ types[is_img_found] ].getAsFile();
								var reader = new FileReader();
								reader.onload = function(event){
									newapp.image_paste_step2(event.target.result);
								};
								reader.readAsDataURL(blob);
								cp.clearData();
								return false;
							}
							return false;
						}else{
							console.log("Ignored image paste in inside elements");
						}
					}else if( "text/plain" in types ){
						d = cleanpasted( cp.getData('Text') );
						e.preventDefault();
						console.log( d );
						this.frame.document.execCommand("insertText", false, d );
					}else{
						console.log("Unhandled paste");
					}
					setTimeout(this.initialize_tables,500);
				}
			},
			clean_html_table: function( vtable ){
				var trs = Array.from(vtable.children[0].children);
				var max_tds = 0;
				for(var i=0;i<trs.length;i++){
					if( trs[i].nodeName != "TR" ){
						trs[i].remove();
						trs.splice(i,1);
						i--;
					}else{
						var tds = Array.from(trs[i].children);
						for(var j=0;j<tds.length;j++){
							if( tds[j].nodeName != "TD" && tds[j].nodeName != "TH" ){
								tds[j].remove();
								tds.splice(j,1);
								j--;
							}
						}
						if( tds.length > max_tds ){
							max_tds = tds.length;
						}
					}
				}
				for(var i=0;i<trs.length;i++){
					var tds = Array.from(trs[i].children);
					while( tds.length < max_tds ){
						var vtd = this.frame.document.createElement("td");
						trs[i].appendChild( vtd );
						tds = Array.from(trs[i].children);
					}
				}
			},
			image_paste_step2: function( vimg ){
				this.image_crop_popup = true;
				this.image_blob = vimg;
			},
			trackroot: function( v ){
				if( v.hasAttribute("data-id") ){
					if( v.getAttribute("data-id", "root") ){
						return false;
					}
				}
				if( v.nodeName != "TBODY" ){
					this.focustree.splice( 0, 0, v );
				}
				//console.log( v.parentNode );
				this.trackroot( v.parentNode );
			},
			randid: function(){
				return "v-"+parseInt(Math.random()*100000)+"-"+parseInt(Math.random()*100000);
			},
			find_sections: function(){
				
			},
			delete_selection_elements: function( m ){
				var vels =[];
				var ev = m.startContainer;
				while( 1 ){
					vels.push( ev );
					if( ev == m.endContainer ){
						break;
					}
					ev = ev.nextElementSibling;
				}
				while( vels.length ){
					vels[0].outerHTML = '';
					vels.splice(0,1);
				}
			},
			delsel: function(){
				this.frame.document.getSelection().deleteFromDocument();
			},
			setvid: function(v){
				if( typeof(v)== "object" && "nodeName" in v ){
					if( "hasAttribute" in v ){
						if( v.hasAttribute("id") ){
							return v.getAttribute("id");
						}else{
							var vid = this.randid();
							v.setAttribute( "id", vid );
							return vid;
						}
					}else{
						console.log("setvid. hasattribute error:");
						console.log( v );
						return false;
					}
				}
				return false;
			},
			gt: function(vid){
				return this.frame.document.getElementById(vid);
			},
			create_new: function(v){
				this.hide_other_menus();
				console.log( this.focused );
				var focused_node = this.focused;
				if( this.focused.hasAttribute("data-id") ){
					if( this.focused.getAttribute("data-id") == "root" ){

					}
				}
				var vpos = "afterend";
				if( v == "note" ){
					var newel = this.get_note_html();
					var editel = newel.getElementsByTagName("p")[0];
				}else if( v == "quote" ){
					var newel = this.get_quote_html();
					var editel = newel.getElementsByTagName("p")[0];
				}else if( v == "img" ){
					this.image_mode == 'create';
					this.image_at_pos = this.focused;
					this.show_image_insert_popup();
					return false;
				}else if( v == "list1" ){
					var newel = this.frame.document.createElement("ul");
					newel.className="list-style-disc";
					newel.innerHTML = "<li>&nbsp;</li>";
				}else if( v == "list2" ){
					var newel = this.frame.document.createElement("ol");
					newel.className="list-style-decimal";
					newel.innerHTML = "<li>&nbsp;</li>";
				}else if( v == "pre" ){
					var newel = this.frame.document.createElement("div");
					newel.setAttribute("data-block-type", "PRE");
					newel.innerHTML = "<pre>Type code snippet here...</pre>";
				}else if( v == "table" ){
					var newel = this.frame.document.createElement("div");
					newel.id = this.randid();
					newel.setAttribute("data-block-type", "TABLE");
					var newt = this.frame.document.createElement("TABLE");
					newt.innerHTML = `<tbody>
					<tr><td></td><td></td></tr>
					<tr><td></td><td></td></tr>
					<tr><td></td><td></td></tr>
					<tr><td></td><td></td></tr>
					</tbody>`;
					newel.appendChild(newt);
				}else{
					var newel = this.frame.document.createElement(v);
				}
				console.log( this.focused.nodeName );
				if( this.focused.nodeName.match(/^(LI|TD|TH)$/) ){
					this.focused.appendChild( newel );
				}else{
					this.focused.insertAdjacentElement(vpos, newel);
				}
				if( v == "img" ){
				}else if( v == "note" || v == "quote" ){
					this.select_range_with_element(editel);
				}else if( v == 'table' ){
					this.initialize_table( newt );
				}else{
					this.select_range_with_element(newel);
				}
				this.initialize_order();
			},
			get_note_contents: function(){
				var v = this.focused_block.getElementsByClassName("note2");
				if( v.length ){
					return v[0].innerHTML;
				}
				return false;
			},
			get_quote_contents: function(){
				var v = this.focused_block.getElementsByClassName("note2");
				if( v.length ){
					return v[0].childNodes;
				}
				return false;
			},
			get_note_html: function(){
				var newel = this.frame.document.createElement("div");
				newel.className = "block_note_info";
				newel.setAttribute("data-block-type", "NOTE");
				var newel2 = this.frame.document.createElement("div");
				newel.appendChild( newel2 );
				newel2.className = "note1";
				newel2.innerHTML = "&#9758;";
				var newel2 = this.frame.document.createElement("div");
				newel.appendChild( newel2 );
				newel2.className = "note2";
				var editel = this.frame.document.createElement("p");
				newel2.appendChild(editel);
				var newel3 = this.frame.document.createElement("div");
				newel3.style.clear='both';
				newel3.className = "note3";
				newel.appendChild( newel3 );
				return newel;
			},
			get_quote_html: function(){
				var newel = this.frame.document.createElement("div");
				newel.className = "block_quote_small";
				newel.setAttribute("data-block-type", "QUOTE");
				var editel = this.frame.document.createElement("p");
				newel.appendChild(editel);
				return newel;
			},
			show_image_insert_popup: function(){
				this.image_popup_tab = 'edit';
				this.image_popup = true;
				this.image_mode = 'create';
				this.image_at = this.focused;
				this.frame.document.body.style.overflow='hidden';
			},
			show_image_update_popup: function(){
				this.image_mode = 'edit';
				this.image_popup_tab = 'edit';
				this.image_at = this.focused;
				var img_block = false;
				if( this.focused_block_type != "IMAGE" ){
					return false;
				}
				console.log( this.focused_block.getElementsByTagName("img") );
				var s = this.focused_block.getElementsByTagName("img")[0].getAttribute("src");
				if( s.length < 2000 ){
					this.image_url = s;
				}else{
					this.image_blob = s;
				}
				console.log( this.focused_block.getElementsByClassName("image_caption") );
				var k = this.focused_block.getElementsByClassName("image_caption");
				if( k.length ){
					this.image_caption_txt = k[0].innerHTML;
				}else{
					this.image_caption_txt = "";
				}
				this.image_popup = true;
				this.frame.document.body.style.overflow='hidden';
			},
			hide_image_popup: function(){
				this.hide_other_menus();
				this.image_popup = false;
			},
			get_image_html: function( vimage_url = false ){
				var v = this.frame.document.createElement("div");
				v.setAttribute("data-block-type", 'IMAGE');
				v.setAttribute("data-im", 'default');
				v.setAttribute("data-is", 'large');
				v.setAttribute("id", this.randid() );
				v.className = "image";
				if( vimage_url ){
					v2 = vimage_url;
					v2.setAttribute("title", "Double click to view or edit");
				}else{
					var v2 =this.frame.document.createElement("img");
					v2.setAttribute("title", "Double click to view or edit");
					if( this.image_blob ){
						v2.setAttribute( "src", this.image_blob );
					}else{
						v2.setAttribute( "src", this.image_url );
					}
				}
				v.appendChild(v2);
				var v3 =this.frame.document.createElement("div");
				v3.innerHTML = this.image_caption_txt;
				v3.className = "image_caption";
				if( this.image_caption_txt ){
					v3.setAttribute("data-display", "yes");
				}else{
					v3.setAttribute("data-display", "no");
				}
				v.appendChild(v3);
				return v;
			},
			image_update: function(){
				if( this.image_mode == 'create' ){
					var v = this.get_image_html();
					if( this.image_at_pos == 't' ){
						var vpos = 'beforebegin';
					}else{
						var vpos = 'afterend';
					}
					if( this.image_at.nodeName.match(/^(TD|TH|LI)$/) ){
						this.image_at.appendChild( v );
					}else{
						this.image_at.insertAdjacentElement(vpos, v );
					}
					this.hide_other_menus();
				}else if( this.image_mode == 'edit' ){
					this.focused_block.getElementsByTagName("img")[0].setAttribute('src', this.image_url);
					var c = this.focused_block.getElementsByClassName("image_caption");
					if( c.length ){
						c[0].innerHTML = this.image_caption_txt;
					}
					this.hide_other_menus();
				}
			},
			image_insert_after_crop: function( vurl, des, image_id ){
				this.image_url = vurl;
				this.image_blob = false;
				this.image_caption = true;
				this.image_caption_txt = des;
				var newim = this.get_image_html();
				if( this.image_at.nodeName.match(/^(LI|TD|TH)$/) ){
					newim.setAttribute("data-is", 'large');
					this.image_at.appendChild( newim );
				}else{
					this.image_at.insertAdjacentElement("afterend", newim );
				}
			},
			find_sections_in_html: function( v ){
				var vl = v.childNodes;
				if( vl.length == 1 && v.childNodes[0].nodeName == "#text" ){
					return false;
				}
				var f = true;
				for( var i=0;i<vl.length;i++){
					if( vl[i].nodeName.match(/^(P|DIV|H1|H2|H3|H4|PRE|TABLE|UL|OL|\#text)$/) == null ){
						console.log("find_sections_in_html: found: " + vl[i].nodeName );
						f = false;
					}
				}
				if( f ){
					return vl;
				}else{
					return false;
				}
			},

			create_new_td: function( v ){
				this.hide_other_menus();
				if( v == "tdt" || v== "tdb" ){
					var vpos = "beforebegin";
					if( v == "tdb" ){
						vpos = "afterend";
					}
					var newel = this.frame.document.createElement("tr");
					newel.innerHTML = "<td></td>".repeat( this.focused_tr.children.length );
					this.focused_tr.insertAdjacentElement(vpos, newel);
				}else{
					var vpos = "beforebegin";
					if( v == "tdr" ){
						vpos = "afterend";
					}
					var i = this.focused_td.cellIndex;
					var vtr = this.focused_tr;
					var vtrs = vtr.parentNode.children;
					for(var k=0;k<vtrs.length;k++){
						var newel = this.frame.document.createElement("td");
						if( vtrs[k].children[i].nodeName == "TD" ){
							vtrs[k].children[i].insertAdjacentElement(vpos, newel);
						}
					}
					if( v == "tdl" ){
						this.select_range_with_element( this.focused_td.previousElementSibling );
					}else{
						this.select_range_with_element( this.focused_td.nextElementSibling );
					}
				}
				setTimeout(this.initialize_tables,100);
			},
			create_new_tr: function( v ){
				this.hide_other_menus();
				var vpos = "beforebegin";
				if( v == "b" ){
					vpos = "afterend";
				}
				var newel = this.frame.document.createElement("tr");
				newel.innerHTML = "<td></td>".repeat(this.vm.children.length);
				this.focused_tr.insertAdjacentElement(vpos, newel);
				this.initialize_table( this.focused_table );
			},

			td_delete_column: function(){
				var h = this.focused_td.cellIndex;
				var trs = this.focused_tr.parentNode.children;
				for(var i=0;i<trs.length;i++){
					try{
						trs[i].children[ h ].remove();
					}catch(e){
						console.error("td_delete_column: " + e );
					}
				}
				this.hide_other_menus();
				setTimeout(this.initialize_tables, 100);
			},
			td_delete_row: function(){
				this.focused_tr.remove();
				this.hide_other_menus();
				this.initialize_table(this.focused_table);
			},
			tr_copy: function(v){
				this.hide_other_menus();
				var vpos = "beforebegin";
				if( v == "b" ){
					vpos = "afterend";
				}
				var newel = this.frame.document.createElement("tr");
				newel.innerHTML = this.focused_tr.innerHTML;
				this.focused_tr.insertAdjacentElement(vpos, newel);
				this.initialize_table(this.focused_table);
			},
			table_delete: function(){
				if( this.focused_block_type == "TABLE" ){
					this.focused_block.remove();
				}else if( this.focused_table ){
					this.focused_table.remove();
				}
				this.hide_other_menus();
				setTimeout(this.initialize_tables,100);
			},
			table_split: function(){
				if( this.focused_tr ){
					var ntdiv = this.frame.document.createElement("div");
					ntdiv.setAttribute("data-block-type", "TABLE");
					var nt = this.frame.document.createElement("table");
					var ntb = this.frame.document.createElement("tbody");
					var trs = Array.from(this.focused_tr.parentNode.children );
					var tri = trs.indexOf( this.focused_tr );
					if( tri > 1 && tri < (trs.length*.8) ){
						var cnt = 0;
						while(trs.length > (tri) ){ cnt++; if( cnt > 20 ){break;}
							ntb.appendChild( trs[tri] );
							trs.splice( (tri), 1 );
						}
						nt.appendChild( ntb );
						ntdiv.appendChild(nt);
						if( this.focused_block_type == "TABLE" ){
							this.focused_block.insertAdjacentElement("afterend", ntdiv);
						}else{
							this.focused_table.insertAdjacentElement("afterend", ntdiv);
						}
					}else{
						alert("Select middle row for splitting");
					}
				}
				this.hide_other_menus();
				setTimeout(this.initialize_tables,100);
			},
			open_cell_settings: function(e){

			},

			drop_event: function(e){
			},

			hide_other_menus: function(){
				this.frame.document.body.style.overflow='';
				this.contextmenu_hide();
				this.hide_bounds();
				this.show_toolbar = false;
				this.settings_menu = false;
				this.link_suggest = false;
				this.image_inline_menu = false;
				this.image_crop_popup = false;
				this.anchor_menu = false;
				this.focused_anchor = false;
				this.li_add_menu = false;
				this.add_menu = false;
				this.image_popup = false;
				this.td_add_menu = false;
				this.td_cell_delete_menu = false;
			},
			is_target_in_editor: function( vt ){
				if( vt == null ){ console.error("is_target_in_editor: null"); return false; }
				//console.log( vt );
				if( vt.nodeName == "" ){ console.log("is_target_in_editor: nodename not found!"); return "bounds"; }
				var cnt = 0;
				while( 1 ){
					cnt++; if( cnt > 20 ){break;}
					try{
					if( "nodeName" in vt == false ){
						console.log( cnt );
						console.error("is_target_in_editor error");
						console.error("nodeName not found");
						console.log( vt );
						return "bounds";
					}
					if( vt.nodeName != "#text"  ){
						if( vt.nodeName == "BODY" || vt.nodeName == "#document" || "hasAttribute" in vt == false ){
							return false;
						}
						if( vt.hasAttribute("data-id") ){
							if( vt.getAttribute("data-id") ){
								if( vt.getAttribute('data-id') == "editor-popup" ){
									return "bounds";
								}
								if( vt.getAttribute('data-id') == "bounds" ){
									return "bounds";
								}
								if( vt.getAttribute('data-id') == "root" ){
									return "editor";
								}
							}
						}
					}
					}catch(e){ console.log("is_target_in_editor"); console.log(cnt); console.log( e ); console.log( vt ); return false;}
					vt = vt.parentNode;
					if( vt == null ){
						return "bounds";
					}
				}
			},
			is_focus_in_editor: function(){
				var sr = this.frame.document.getSelection(   ).getRangeAt( 0 );
				var vt = sr.startContainer;
				var cnt = 0;
				while( 1 ){
					cnt++; if( cnt > 20 ){break;}
					try{
					if( vt.nodeName != "#text"  ){
						if( vt.nodeName == "BODY" || vt.nodeName == "#document" || "hasAttribute" in vt == false ){
							return false;
						}
						if( vt.hasAttribute("data-id") ){
							if( vt.getAttribute("data-id") ){
								if( vt.getAttribute('data-id') == "editor-popup" ){
									return "bounds";
								}
								if( vt.getAttribute('data-id') == "bounds" ){
									return "bounds";
								}
								if( vt.getAttribute('data-id') == "root" ){
									return "editor";
								}
							}
						}
					}
					}catch(e){ console.log("is_target_in_editor"); console.log(cnt); console.log( e ); console.log( vt ); return false;}
					vt = vt.parentNode;
					if( vt == null ){
						return "bounds";
					}
				}
			},
			find_target_editable: function(vt){
				var cnt = 0;
				var editable_node = false;
				var is_it_in_editor = false;
				while( 1 ){
					cnt++; if( cnt > 20 ){break;}
					if( vt.nodeName != "#text"  ){
						try{
							if( "getAttribute" in vt == false ){
								break;
							}
							if( vt.getAttribute('data-id') == "root" ){
								is_it_in_editor = true;
								break;
							}
							if( vt.nodeName.match(/^(H1|H2|H3|H4|P|TR|TD|TH|PRE|DIV|LI|A|IMG)$/i) ){
								if( editable_node == false ){
								editable_node = vt;
								}
							}
						}catch(e){ console.log("find_editable"); console.log( e ); console.log( vt ); return false;}
					}
					vt = vt.parentNode;
				}
				if( editable_node && is_it_in_editor ){
					return editable_node;
				}
				return false;
			},
			find_vm_focusble: function(vt){
				var cnt = 0;
				while( 1 ){
					cnt++; if( cnt > 20 ){break;}
					if( vt.nodeName != "#text"  ){
						try{
							if( "getAttribute" in vt == false ){
								return false;
							}
							if( vt.getAttribute('data-id') == "root" ){
								return false;
							}
							if( vt.nodeName.match(/^(H1|H2|H3|H4|P|TABLE|TBODY|TR|TD|TH|PRE|DIV|OL|UL|LI|IMG)$/i) ){
								if( vt.nodeName == "IMG" ){
									if( vt.parentNode.nodeName == "DIV" ){
										vt = vt.parentNode;
									}
								}
								if( vt.nodeName == "DIV" ){
									if( vt.hasAttribute("data-block-type") ){
										if( vt.getAttribute("data-block-type") == "TABLE" ){
										//	return false;
										}
									}
									if( vt.className.match(/^(note1|note2|note3)$/) ){
										return false;
									}
								}
								return vt;
							}
						}catch(e){ console.log("find_editable"); console.log( e ); console.log( vt ); return false;}
					}
					vt = vt.parentNode;
				}
				return false;
			},
			is_target_in_td: function(vt){
				var cnt = 0;
				while( 1 ){
					cnt++; if( cnt > 4 ){break;}
					if( vt.nodeName != "#text"  ){
						try{
							if( "getAttribute" in vt == false ){
								return false;
							}
							if( vt.getAttribute('data-id') == "root" ){
								return false;
							}
							if( vt.nodeName.match(/^(TD|TH)$/i) ){
								return vt;
							}
						}catch(e){ console.error("is_target_in_td"); console.error( e ); console.log( vt ); return false;}
					}
					vt = vt.parentNode;
				}
				return false;
			},
			is_target_in_table: function(vt){
				var cnt = 0;
				while( 1 ){
					cnt++; if( cnt > 5 ){break;}
					if( vt.nodeName != "#text"  ){
						try{
							if( "getAttribute" in vt == false ){
								return false;
							}
							if( vt.getAttribute('data-id') == "root" ){
								return false;
							}
							if( vt.nodeName.match(/^(TABLE)$/i) ){
								return vt;
							}
						}catch(e){ console.error("is_target_in_table"); console.error( e ); console.log( vt ); return false;}
					}
					vt = vt.parentNode;
				}
				return false;
			},
			table_add_column: function(v){
				var trs = Array.from(v.children[0].childNodes);
				for(var i=0;i<trs.length;i++){
					if( trs[i].nodeName != "TR" ){ trs[i].remove(); trs.splice(i,1);i--;}
				}
				for(var i=0;i<trs.length;i++){
					var vl = this.frame.document.createElement("td");
					trs[i].appendChild(vl);
				}
			},
			table_add_row: function(v){
				var trs = v.children[0].childNodes;
				for(var i=0;i<trs.length;i++){
					if( trs[i].nodeName != "TR" ){ trs[i].remove(); trs.splice(i,1);i--;}
				}
				var newtr = this.frame.document.createElement("tr");
				var tds = Array.from(trs[0].childNodes);
				for(var i=0;i<tds.length;i++){
					if( tds[i].nodeName.match(/^(TD|TH)$/) == null ){ tds[i].remove(); tds.splice(i,1);i--;}
				}
				for(var i=0;i<tds.length;i++){
					var newtd = this.frame.document.createElement("td");
					newtr.appendChild( newtd );
				}
				v.children[0].appendChild(newtr);
			},
			td_paste_cells: function(vtable){
				var newtrs = Array.from(vtable.children[0].childNodes);
				if( this.td_sel_cnt > 1 ){
					var start_td = this.td_sel_cells[0]['cols'][0]['col']
				}else{
					var start_td = this.focused_td;
				}
				var current_td = start_td;
				var current_tr = this.focused_td.parentNode;
				for(var i=0;i<newtrs.length;i++){
					var newtds = Array.from(newtrs[i].childNodes);
					for(var j=0;j<newtds.length;j++){
						current_td.innerHTML = newtds[j].innerHTML;
						if( j < newtds.length-1 ){
							if( current_td.nextElementSibling ){
								current_td = current_td.nextElementSibling;
							}else{
								this.table_add_column(this.focused_table);
								current_td = current_td.nextElementSibling;
							}
						}
					}
					if( i < newtrs.length-1 ){
						if( current_tr.nextElementSibling ){
							current_tr = current_tr.nextElementSibling;
						}else{
							this.table_add_row(this.focused_table);
							console.log( current_tr );
							current_tr = current_tr.nextElementSibling;
						}
						current_td = current_tr.childNodes[ this.focused_td.cellIndex ];
					}
				}
				this.initialize_table( this.focused_table );
			},
			dataURItoBlob: function(dataURI) {
				var x = dataURI.split(',');
				var byteString = atob(x[1]);
				var mimeString = x[0].split(':')[1].split(';')[0];
				var ab = new ArrayBuffer(byteString.length);
				var ia = new Uint8Array(ab);
				for (var i = 0; i < byteString.length; i++) {
					ia[i] = byteString.charCodeAt(i);
				}
				var blob = new Blob([ab], {type: mimeString});
				return blob;
			},
			table_settings_update: function(v, d, e){
				if( this.focused_table ){
					if( v == "mheight" ){
					}else{
						this.table_settings[v] = d;
					}
					this.focused_table.setAttribute("data-tb-border", this.table_settings['border'] );
					this.focused_table.setAttribute("data-tb-spacing", this.table_settings['spacing'] );
					this.focused_table.setAttribute("data-tb-hover", this.table_settings['hover'] );
					this.focused_table.setAttribute("data-tb-striped", this.table_settings['striped'] );
					this.focused_table.setAttribute("data-tb-width", this.table_settings['width'] );
					this.focused_table.setAttribute("data-tb-theme", this.table_settings['theme'] );
					this.focused_table.setAttribute("data-tb-header", this.table_settings['header'] );
					this.focused_table.setAttribute("data-tb-colheader", this.table_settings['colheader'] );
					if( this.focused_table.parentNode.hasAttribute("data-block-type") ){
						if( this.focused_table.parentNode.getAttribute("data-block-type") == "TABLE" ){
							this.focused_table.parentNode.setAttribute("data-mheight", this.table_settings['mheight'] );
							this.focused_table.parentNode.setAttribute("data-overflow", this.table_settings['overflow'] );
						}
					}
				}
			},
			section_update_event: function( vi, vevent, vorder, html ){

			},
			image_crop_save: function( v ){
				console.log( v );
				this.image_crop_popup = false;
				this.image_insert_after_crop( v['url'],v['des'],v['image_id']);
			},
			insert_from_gallery: function( v ){
				this.image_url = v['file_path'];
				this.image_caption_txt = v['des'];
				this.image_blob = "";
				this.image_popup = false;
				this.image_update();
			},
			image_popup_file_select: function( e ){
				var f= e.target.files[0];
				if( f ){
					console.log( f.type );
					if( f.type.match(/image/) != null ){
						var img = e.target.files[0];
						var reader = new FileReader();
						reader.onload = function(event){
							newapp.image_popup_file_select2(event.target.result);
						};
						reader.readAsDataURL( img );
					}
				}
			},
			image_popup_file_select2: function( vimg ){
				this.image_url = "";
				this.image_popup = false;
				this.image_crop_popup = true;
				this.image_blob = vimg;
			},
			link_suggest_select: function( vd ){
			}
		},
		template: template_data
	}).mount(this.frame.document.getElementById("editor_controlls"));

	console.log( "app created " );