/*
---
 
name: Mif.Tree.Empty
description: Extents Mif.Tree to provide a method for clearing all nodes.
license: MIT-Style License
copyright: Dipl.-Ing. (FH) André Fiedler <konatkt at vidualdrugs dot net>
authors: Dipl.-Ing. (FH) André Fiedler <konatkt at vidualdrugs dot net>
requires: Mif.Tree
 
...
*/

Mif.Tree.implement({
	
	empty: function(){
		if(this.root && this.root.getFirst()){
			this.selected = false;
			var next = this.forest ? this.root.getFirst() : this.root;
            while(next){
				next.getDOM('node').destroy();
				next = next.getNext();
			}
            this.$getIndex();
            Mif.Tree.Draw.update();
			var next = this.forest ? this.root.getFirst() : this.root;
			while(next){
                next.recursive(function(){
                	if(this.id) delete Mif.ids[this.id];
                });
				next = next.getNext();
			}
            this.mouse.node = false;
            this.updateHover();
		}
		return this;
	}
});