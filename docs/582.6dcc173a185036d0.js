"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[582],{7582:(_,p,a)=>{a.r(p),a.d(p,{CarrinhoModule:()=>v});var c=a(6895),s=a(9541),e=a(1571),u=a(5087),l=a(433);function h(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"li"),e.\u0275\u0275element(1,"img",6),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"p"),e.\u0275\u0275text(5),e.\u0275\u0275pipe(6,"currency"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"label"),e.\u0275\u0275text(8," quantidade: "),e.\u0275\u0275elementStart(9,"input",7),e.\u0275\u0275listener("ngModelChange",function(i){const d=e.\u0275\u0275restoreView(t).$implicit;return e.\u0275\u0275resetView(d.quantidade=i)})("change",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(i.calculaTotal())}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(10,"button",8),e.\u0275\u0275listener("click",function(){const m=e.\u0275\u0275restoreView(t).$implicit,d=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(d.removerProdutoCarrinho(m.id))}),e.\u0275\u0275element(11,"i",9),e.\u0275\u0275elementEnd()()}if(2&n){const t=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("src",t.imagem,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.descricao),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("Pre\xe7o: ",e.\u0275\u0275pipeBind2(6,4,t.preco,"BRL"),""),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngModel",t.quantidade)}}function C(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div")(1,"ul"),e.\u0275\u0275template(2,h,12,7,"li",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"h2",4),e.\u0275\u0275text(4),e.\u0275\u0275pipe(5,"currency"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"button",5),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.comprar())}),e.\u0275\u0275text(7,"Comprar"),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",t.itensCarrinho),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("Total: ",e.\u0275\u0275pipeBind2(5,2,t.total,"BRL"),"")}}function g(n,o){1&n&&e.\u0275\u0275text(0," Nenhum produto foi adicionado ao carrinho\n")}const f=[{path:"",component:(()=>{class n{constructor(t,r){this.carrinhoService=t,this.router=r,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obtemCarrinho(),this.calculaTotal()}calculaTotal(){this.total=this.itensCarrinho.reduce((t,r)=>t+r.preco*r.quantidade,0)}removerProdutoCarrinho(t){this.itensCarrinho=this.itensCarrinho.filter(r=>r.id!==t),this.carrinhoService.removerProdutoCarrinho(t),this.calculaTotal()}comprar(){alert("Parab\xe9ns voc\xea finalizou s sua compra!"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(u.e),e.\u0275\u0275directiveInject(s.F0))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["semProduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(t,r){if(1&t&&(e.\u0275\u0275elementStart(0,"h2",0),e.\u0275\u0275text(1,"Carrinho"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,C,8,5,"div",1),e.\u0275\u0275template(3,g,1,0,"ng-template",null,2,e.\u0275\u0275templateRefExtractor)),2&t){const i=e.\u0275\u0275reference(4);e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",r.itensCarrinho.length>0)("ngIfElse",i)}},dependencies:[c.sg,c.O5,l.DefaultValueAccessor,l.NumberValueAccessor,l.NgControlStatus,l.NgModel,c.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]}),n})()}];let x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[s.Bz.forChild(f),s.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.ez,x,l.FormsModule]}),n})()}}]);