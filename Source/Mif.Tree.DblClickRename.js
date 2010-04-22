/*
---
 
name: Mif.Tree.DlbClickRename
description: Overwrites Mif.Tree´s dblClick handling for node renaming.
license: MIT-Style License
copyright: Dipl.-Ing. (FH) André Fiedler <konatkt at vidualdrugs dot net>
authors: Dipl.-Ing. (FH) André Fiedler <konatkt at vidualdrugs dot net>
requires: Mif.Tree
requires: Mif.Tree.GetDepth
 
...
*/

Mif.Tree.DblClickRename = new Class({
	
	Implements: [new Options],
		
	options:{
		minDepth: 1
	},
	
	initialize: function(tree, options){
		this.setOptions(options);
		this.tree = tree;
		this.tree.wrapper.removeEvent('dblclick', this.tree.bound.toggleDblclick);
		this.bound = {};
		this.bound.onDblClick = this.onDblClick.bind(this);
		this.tree.wrapper.addEvent('dblclick', this.bound.onDblClick);
	},
	
	onDblClick: function(event){
		if(this.tree.mouse.node.getDepth() >= this.options.minDepth)
			this.tree.mouse.node.rename();
	}
});