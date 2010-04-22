/*
---
 
name: Mif.Tree.GetDepth
description: Extents Mif.Tree.Node to provide a method for getting note´s depth.
license: MIT-Style License
copyright: Dipl.-Ing. (FH) André Fiedler <konatkt at vidualdrugs dot net>
authors: Dipl.-Ing. (FH) André Fiedler <konatkt at vidualdrugs dot net>
requires: Mif.Tree
provides: Mif.Tree.Node
 
...
*/

Mif.Tree.Node.implement({
	
	getDepth: function(){
		var depth = 0,
			node = this;
		while (node) {
			node = node.getParent();
			depth++;
		};
		if(this.tree.forest) depth--;
		return depth;
	}
});