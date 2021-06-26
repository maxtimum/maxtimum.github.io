(this["webpackJsonpportfolio-v2"]=this["webpackJsonpportfolio-v2"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(16),s=a.n(n),r=a(81),c=a(17),l=(a(95),a(28)),d=a(12),h=a(74),j=a(142),o=a(144),b=a(145),u=a(134),m=a(141),p=a(151),x=a(148),O=a(152),f=a(146),g=a(83),y=a(149),v=a(143),w=a(147),z=a(153),_=a(80),P=a.n(_),T=a(79),E=a.n(T),C=a(67),k=a.n(C),S=a(1),A=a(4),D=a(138),M=a(3);function N(e){e.preventDefault();var t=new FormData(e.target),a={sigma:Number(t.get("lorenz_sigma")),beta:Number(t.get("lorenz_beta")),rho:Number(t.get("lorenz_rho"))};document.dispatchEvent(new CustomEvent("attractor_updated",{detail:{idx:0,p:a}}))}var F=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sigma:10,rho:28,beta:8/3},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.00125;Object(S.a)(this,e),this.idx=0,this.params=t,this.dt=a,this.defaultCam={x:0,y:0,z:50}}return Object(A.a)(e,[{key:"updatePTS",value:function(e){for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],n=e[t+2],s=this.params.sigma*(i-a)*this.dt,r=(a*(this.params.rho-n)-i)*this.dt,c=(a*i-this.params.beta*n)*this.dt;e[t]+=s,e[t+1]+=r,e[t+2]+=c}}},{key:"getInfoPanel",value:function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(u.a,{item:!0,xs:8,children:[Object(M.jsxs)(g.a,{children:["Sigma, beta, and rho are parameters for the Lorenz attractor (",Object(M.jsx)(D.a,{href:"https://en.wikipedia.org/wiki/Lorenz_system",target:"_blank",rel:"noreferrer",children:"Wikipedia"}),")"]}),Object(M.jsx)(g.a,{children:"Try changing them and click 'update params' to restart the simulation!"}),Object(M.jsx)(g.a,{children:"dx/dt = sigma*(y-x)"}),Object(M.jsx)(g.a,{children:"dy/dt = x*(rho-z) - y"}),Object(M.jsx)(g.a,{children:"dz/dt = x*y - beta*z"})]}),Object(M.jsx)(u.a,{item:!0,xs:4,children:Object(M.jsxs)("form",{onSubmit:N,children:[Object(M.jsx)(y.a,{name:"lorenz_sigma",defaultValue:this.params.sigma,inputProps:{type:"number",step:"any"},label:"SIGMA"}),Object(M.jsx)(y.a,{name:"lorenz_beta",defaultValue:this.params.beta,inputProps:{type:"number",step:"any"},label:"BETA"}),Object(M.jsx)(y.a,{name:"lorenz_rho",defaultValue:this.params.rho,inputProps:{type:"number",step:"any"},label:"RHO"}),Object(M.jsx)(v.a,{fullWidth:!0,type:"submit",children:"UPDATE"})]})})]})}}]),e}();function V(e){e.preventDefault();var t=new FormData(e.target),a={b:Number(t.get("thomas_b"))};document.dispatchEvent(new CustomEvent("attractor_updated",{detail:{idx:1,p:a}}))}var B=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{b:.208186},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.00125;Object(S.a)(this,e),this.idx=1,this.params=t,this.dt=10*a,this.defaultCam={x:0,y:0,z:30}}return Object(A.a)(e,[{key:"updatePTS",value:function(e){for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],n=e[t+2],s=(Math.sin(i)-this.params.b*a)*this.dt,r=(Math.sin(n)-this.params.b*i)*this.dt,c=(Math.sin(a)-this.params.b*n)*this.dt;e[t]+=s,e[t+1]+=r,e[t+2]+=c}}},{key:"getInfoPanel",value:function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(u.a,{item:!0,xs:8,children:[Object(M.jsxs)(g.a,{children:["B is the only parameter for the Thomas cyclically symmetric attractor (",Object(M.jsx)(D.a,{href:"https://en.wikipedia.org/wiki/Thomas%27_cyclically_symmetric_attractor",target:"_blank",rel:"noreferrer",children:"Wikipedia"}),")"]}),Object(M.jsx)(g.a,{children:"Try changing it and click 'update params' to restart the simulation!"}),Object(M.jsx)(g.a,{children:"dx/dt = sin(y) - b*x"}),Object(M.jsx)(g.a,{children:"dy/dt = sin(z) - b*y"}),Object(M.jsx)(g.a,{children:"dz/dt = sin(x) - b*z"})]}),Object(M.jsx)(u.a,{item:!0,xs:4,children:Object(M.jsxs)("form",{onSubmit:V,children:[Object(M.jsx)(y.a,{name:"thomas_b",defaultValue:this.params.b,inputProps:{type:"number",step:"any"},label:"B"}),Object(M.jsx)(v.a,{fullWidth:!0,type:"submit",children:"UPDATE"})]})})]})}}]),e}();function W(e){e.preventDefault();var t=new FormData(e.target),a={a:Number(t.get("aizawa_a")),b:Number(t.get("aizawa_b")),c:Number(t.get("aizawa_c")),d:Number(t.get("aizawa_d")),e:Number(t.get("aizawa_e")),f:Number(t.get("aizawa_f"))};document.dispatchEvent(new CustomEvent("attractor_updated",{detail:{idx:2,p:a}}))}var I=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{a:.95,b:.7,c:.6,d:3.5,e:.25,f:.1},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.00125;Object(S.a)(this,e),this.idx=2,this.params=t,this.dt=a,this.defaultCam={x:0,y:0,z:15}}return Object(A.a)(e,[{key:"updatePTS",value:function(e){for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],n=e[t+2],s=((n-this.params.b)*a-this.params.d*i)*this.dt,r=(this.params.d*a+(n-this.params.b)*i)*this.dt,c=(this.params.c+this.params.a*n-Math.pow(n,3)/3-(a*a+i*i)*(1+this.params.e*n)+this.params.f*n*Math.pow(a,3))*this.dt;e[t]+=s,e[t+1]+=r,e[t+2]+=c}}},{key:"getInfoPanel",value:function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(u.a,{item:!0,xs:8,children:[Object(M.jsx)(g.a,{children:"The Aizawa attractor has 6 parameters and makes a nice circular pattern. It is a little slow to start!"}),Object(M.jsx)(g.a,{children:"Try changing them and click 'update params' to restart the simulation!"}),Object(M.jsx)(g.a,{children:"dx/dt = (z-b)*x - d*y"}),Object(M.jsx)(g.a,{children:"dy/dt = d*x + (z-b)*y"}),Object(M.jsx)(g.a,{children:"dz/dt = c + a*z - z^3/3 - (x^2 + y^2)*(1 + e*z) + f*z*x^3"})]}),Object(M.jsx)(u.a,{item:!0,xs:4,children:Object(M.jsxs)("form",{onSubmit:W,children:[Object(M.jsx)(y.a,{name:"aizawa_a",defaultValue:this.params.a,inputProps:{type:"number",step:"any"},label:"A"}),Object(M.jsx)(y.a,{name:"aizawa_b",defaultValue:this.params.b,inputProps:{type:"number",step:"any"},label:"B"}),Object(M.jsx)(y.a,{name:"aizawa_c",defaultValue:this.params.c,inputProps:{type:"number",step:"any"},label:"C"}),Object(M.jsx)(y.a,{name:"aizawa_d",defaultValue:this.params.d,inputProps:{type:"number",step:"any"},label:"D"}),Object(M.jsx)(y.a,{name:"aizawa_e",defaultValue:this.params.e,inputProps:{type:"number",step:"any"},label:"E"}),Object(M.jsx)(y.a,{name:"aizawa_f",defaultValue:this.params.f,inputProps:{type:"number",step:"any"},label:"F"}),Object(M.jsx)(v.a,{fullWidth:!0,type:"submit",children:"UPDATE"})]})})]})}}]),e}();function L(e){e.preventDefault();var t=new FormData(e.target),a={a:Number(t.get("dadras_a")),b:Number(t.get("dadras_b")),c:Number(t.get("dadras_c")),d:Number(t.get("dadras_d")),e:Number(t.get("dadras_e"))};document.dispatchEvent(new CustomEvent("attractor_updated",{detail:{idx:3,p:a}}))}var R=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{a:3,b:2.7,c:1.7,d:2,e:9},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.00125;Object(S.a)(this,e),this.idx=3,this.params=t,this.dt=a,this.defaultCam={x:0,y:0,z:50}}return Object(A.a)(e,[{key:"updatePTS",value:function(e){for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],n=e[t+2],s=(i-this.params.a*a+this.params.b*i*n)*this.dt,r=(this.params.c*i-a*n+n)*this.dt,c=(this.params.d*a*i-this.params.e*n)*this.dt;e[t]+=s,e[t+1]+=r,e[t+2]+=c}}},{key:"getInfoPanel",value:function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(u.a,{item:!0,xs:8,children:[Object(M.jsx)(g.a,{children:"The Dadras attractor has 5 parameters, a-e! It is quite energetic and very pretty."}),Object(M.jsx)(g.a,{children:"Try changing them and click 'update params' to restart the simulation!"}),Object(M.jsx)(g.a,{children:"dx/dt = y - a*x  + b*y*z"}),Object(M.jsx)(g.a,{children:"dy/dt = c*y - x*z + z"}),Object(M.jsx)(g.a,{children:"dz/dt = d*x*y - e*z"})]}),Object(M.jsx)(u.a,{item:!0,xs:4,children:Object(M.jsxs)("form",{onSubmit:L,children:[Object(M.jsx)(y.a,{name:"dadras_a",defaultValue:this.params.a,inputProps:{type:"number",step:"any"},label:"A"}),Object(M.jsx)(y.a,{name:"dadras_b",defaultValue:this.params.b,inputProps:{type:"number",step:"any"},label:"B"}),Object(M.jsx)(y.a,{name:"dadras_c",defaultValue:this.params.c,inputProps:{type:"number",step:"any"},label:"C"}),Object(M.jsx)(y.a,{name:"dadras_d",defaultValue:this.params.d,inputProps:{type:"number",step:"any"},label:"D"}),Object(M.jsx)(y.a,{name:"dadras_e",defaultValue:this.params.e,inputProps:{type:"number",step:"any"},label:"E"}),Object(M.jsx)(v.a,{fullWidth:!0,type:"submit",children:"UPDATE"})]})})]})}}]),e}();function U(e){e.preventDefault();var t=new FormData(e.target),a={alpha:Number(t.get("chen_alpha")),beta:Number(t.get("chen_beta")),delta:Number(t.get("chen_delta"))};document.dispatchEvent(new CustomEvent("attractor_updated",{detail:{idx:4,p:a}}))}var G=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alpha:5,beta:-10,delta:-.38},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.00125;Object(S.a)(this,e),this.idx=4,this.params=t,this.dt=a,this.defaultCam={x:0,y:0,z:50}}return Object(A.a)(e,[{key:"updatePTS",value:function(e){for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],n=e[t+2],s=(this.params.alpha*a-i*n)*this.dt,r=(this.params.beta*i+a*n)*this.dt,c=(this.params.delta*n+a*i/3)*this.dt;e[t]+=s,e[t+1]+=r,e[t+2]+=c}}},{key:"getInfoPanel",value:function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(u.a,{item:!0,xs:8,children:[Object(M.jsxs)(g.a,{children:["The Chen attractor is a double scroll chaotic attractor, which were first observed electronic circuits with nonlinear resitors(",Object(M.jsx)(D.a,{href:"https://en.wikipedia.org/wiki/Multiscroll_attractor#Lu_Chen_attractor",target:"_blank",rel:"noreferrer",children:"Wikipedia"}),")"]}),Object(M.jsx)(g.a,{children:"Try changing them and click 'update params' to restart the simulation!"}),Object(M.jsx)(g.a,{children:"dx/dt = sigma*(y-x)"}),Object(M.jsx)(g.a,{children:"dy/dt = x*(rho-z) - y"}),Object(M.jsx)(g.a,{children:"dz/dt = x*y - beta*z"})]}),Object(M.jsx)(u.a,{item:!0,xs:4,children:Object(M.jsxs)("form",{onSubmit:U,children:[Object(M.jsx)(y.a,{name:"chen_alpha",defaultValue:this.params.alpha,inputProps:{type:"number",step:"any"},label:"ALPHA"}),Object(M.jsx)(y.a,{name:"chen_beta",defaultValue:this.params.beta,inputProps:{type:"number",step:"any"},label:"BETA"}),Object(M.jsx)(y.a,{name:"chen_delta",defaultValue:this.params.delta,inputProps:{type:"number",step:"any"},label:"DELTA"}),Object(M.jsx)(v.a,{fullWidth:!0,type:"submit",children:"UPDATE"})]})})]})}}]),e}();var H=function(){document.title="~/p/strange-attractors";var e=Object(i.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(i.useState)(!1),r=Object(l.a)(s,2),c=r[0],_=r[1],T=Object(i.useState)(),C=Object(l.a)(T,2),S=C[0],A=C[1],D=Object(i.useState)(new d.h(75,window.innerWidth/window.innerHeight,.1,1e3)),N=Object(l.a)(D,2),V=N[0],W=(N[1],Object(i.useState)(new d.f(150,150))),L=Object(l.a)(W,2),U=L[0],H=(L[1],Object(i.useState)(2e4)),q=Object(l.a)(H,2),Z=q[0],J=q[1],Y=Object(i.useState)(.00125),K=Object(l.a)(Y,2),Q=K[0],X=K[1],$=[new F,new B,new I,new R,new G],ee=Object(i.useState)($[0]),te=Object(l.a)(ee,2),ae=te[0],ie=te[1];return Object(i.useEffect)((function(){A(!1);var e=new d.l;U.visible=!1,e.add(U);var t=new d.q({preserveDrawingBuffer:c,antialias:!0});t.autoClearColor=!c,t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement);var a=new h.a(V,t.domElement);a.addEventListener("change",(function(){t.clear()}));window.addEventListener("resize",(V.aspect=window.innerWidth/window.innerHeight,V.updateProjectionMatrix(),void t.setSize(window.innerWidth,window.innerHeight)));for(var i=new d.b,n=new d.c,s=[],r=[],l=0;l<Z;l++){var j=25*Math.random()-25,o=25*Math.random()-25,b=25*Math.random()-25;n.setRGB(Math.abs(j/25),Math.abs(o/25),Math.abs(b/25)),"Aizawa"===ae.constructor.name&&(j=5*Math.random()-5,o=5*Math.random()-5,b=5*Math.random(),n.setRGB(Math.abs(j/5),Math.abs(o/5),Math.abs(b/5))),s.push(j,o,b),r.push(n.r,n.g,n.b)}i.setAttribute("position",new d.e(s,3)),i.setAttribute("color",new d.e(r,3));var u=new d.j({size:.15,vertexColors:!0}),m=new d.i(i,u);e.add(m);var p=new d.a(16777215,100);e.add(p),V.position.x=ae.defaultCam.x,V.position.y=ae.defaultCam.y,V.position.z=ae.defaultCam.z,a.update();return function i(){requestAnimationFrame(i),ae.updatePTS(m.geometry.attributes.position.array),m.geometry.attributes.position.needsUpdate=!0,a.update(),t.render(e,V)}(),function(){i.dispose(),u.dispose(),t.dispose()}}),[c,Z,U,V,Q,ae]),document.addEventListener("attractor_updated",(function(e){var t=e.detail.idx,a=e.detail.p;0===t?($[0]=new F(a,Q),ie($[0])):1===t?($[1]=new B(a,Q),ie($[1])):2===t?($[2]=new I(a,Q),ie($[2])):3===t?($[3]=new R(a,Q),ie($[3])):4===t&&($[4]=new G(a,Q),ie($[4]))})),Object(M.jsx)("div",{children:Object(M.jsxs)("div",{id:"options",style:{position:"absolute",right:"0px",top:"0px"},children:[Object(M.jsx)(j.a,{style:{position:"absolute",right:"0px",top:"0px"},children:Object(M.jsx)(o.a,{onClick:function(){return A(!S)},children:S?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(E.a,{}),Object(M.jsx)(k.a,{})]}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(P.a,{}),Object(M.jsx)(k.a,{})]})})}),Object(M.jsx)(b.a,{direction:"left",in:S,mountOnEnter:!0,unmountOnExit:!0,children:Object(M.jsx)(j.a,{style:{position:"absolute",top:"52px",right:"0px",width:"500px",overflowY:"scroll"},children:Object(M.jsxs)(u.a,{container:!0,direction:"column",style:{padding:".85rem"},children:[Object(M.jsx)(u.a,{item:!0,xs:12,style:{marginBottom:"4px"},children:Object(M.jsxs)(m.a,{fullWidth:!0,children:[Object(M.jsx)(p.a,{children:"ATTRACTOR"}),Object(M.jsxs)(x.a,{value:ae.idx,onChange:function(e){ie($[e.target.value])},children:[Object(M.jsx)(O.a,{value:0,children:"LORENZ"}),Object(M.jsx)(O.a,{value:1,children:"THOMAS"}),Object(M.jsx)(O.a,{value:2,children:"AIZAWA"}),Object(M.jsx)(O.a,{value:3,children:"DADRAS"}),Object(M.jsx)(O.a,{value:4,children:"CHEN"})]})]})}),Object(M.jsx)(u.a,{item:!0,container:!0,spacing:1,children:ae.getInfoPanel()}),Object(M.jsx)(f.a,{style:{marginTop:"4px",marginBottom:"4px"}}),Object(M.jsx)(u.a,{item:!0,children:Object(M.jsxs)(u.a,{item:!0,container:!0,spacing:1,children:[Object(M.jsx)(u.a,{item:!0,xs:8,children:Object(M.jsx)(g.a,{children:"Chooses how many particles to render your scene with. If the FPS is low, try setting this to a lower value."})}),Object(M.jsx)(u.a,{item:!0,xs:4,children:Object(M.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);J(Number(t.get("particles")))},children:[Object(M.jsx)(y.a,{name:"particles",defaultValue:Z,inputProps:{type:"number",step:"any",min:"1"},label:"PARTICLE COUNT"}),Object(M.jsx)(v.a,{fullWidth:!0,type:"submit",children:"UPDATE"})]})})]})}),Object(M.jsx)(f.a,{style:{marginTop:"4px",marginBottom:"4px"}}),Object(M.jsx)(u.a,{item:!0,children:Object(M.jsxs)(u.a,{item:!0,container:!0,spacing:1,children:[Object(M.jsx)(u.a,{item:!0,xs:8,children:Object(M.jsx)(g.a,{children:"Chooses what dt is set to for the equations. If FPS is low, try setting this to a\xa0higher value."})}),Object(M.jsx)(u.a,{item:!0,xs:4,children:Object(M.jsxs)(m.a,{fullWidth:!0,children:[Object(M.jsx)(p.a,{children:"TIMESTEP"}),Object(M.jsxs)(x.a,{value:Q,onChange:function(e){X(e.target.value)},children:[Object(M.jsx)(O.a,{value:625e-6,children:".000625"}),Object(M.jsx)(O.a,{value:.00125,children:".00125"}),Object(M.jsx)(O.a,{value:.0025,children:".005"}),Object(M.jsx)(O.a,{value:.005,children:".05"})]})]})})]})}),Object(M.jsx)(f.a,{style:{marginTop:"4px",marginBottom:"4px"}}),Object(M.jsx)(u.a,{item:!0,children:Object(M.jsxs)(u.a,{item:!0,container:!0,spacing:1,children:[Object(M.jsx)(u.a,{item:!0,xs:8,children:Object(M.jsx)(g.a,{children:"Sets whether old pixels are cleared before the next frame is drawn."})}),Object(M.jsx)(u.a,{item:!0,xs:4,children:Object(M.jsx)(w.a,{control:Object(M.jsx)(z.a,{checked:c,onChange:function(){return _(!c)}}),label:Object(M.jsx)(g.a,{style:{fontSize:".875rem"},children:"TOGGLE BUFFER"}),labelPlacement:"start"})})]})}),Object(M.jsx)(f.a,{style:{marginTop:"4px",marginBottom:"4px"}}),Object(M.jsx)(u.a,{item:!0,children:Object(M.jsxs)(u.a,{item:!0,container:!0,spacing:1,children:[Object(M.jsx)(u.a,{item:!0,xs:8,children:Object(M.jsx)(g.a,{children:"Toggles visibility of gridlines."})}),Object(M.jsx)(u.a,{item:!0,xs:4,children:Object(M.jsx)(w.a,{control:Object(M.jsx)(z.a,{checked:a,onChange:function(){n(!U.visible),U.visible=!U.visible}}),label:Object(M.jsx)(g.a,{style:{fontSize:".875rem"},children:"TOGGLE GRID"}),labelPlacement:"start"})})]})}),Object(M.jsx)(f.a,{style:{marginTop:"4px",marginBottom:"4px"}}),Object(M.jsx)(u.a,{item:!0,children:Object(M.jsxs)(u.a,{item:!0,container:!0,spacing:1,children:[Object(M.jsx)(u.a,{item:!0,xs:8,children:Object(M.jsx)(g.a,{children:"Resets the camera position/rotation."})}),Object(M.jsx)(u.a,{item:!0,xs:4,children:Object(M.jsx)(v.a,{fullWidth:!0,onClick:function(){return V.position.set(ae.defaultCam.x,ae.defaultCam.y,ae.defaultCam.z)},children:"Zero Camera"})})]})})]})})})]})})};s.a.render(Object(M.jsx)(r.a,{children:Object(M.jsxs)(c.c,{children:[Object(M.jsx)(c.a,{exact:!0,path:"/p/strange-attractors",children:Object(M.jsx)("div",{children:"visualizer"})}),Object(M.jsx)(c.a,{exact:!0,path:"/p/",children:Object(M.jsx)("div",{children:"all projects"})}),Object(M.jsx)(c.a,{exact:!0,path:"/",children:Object(M.jsx)(H,{})})]})}),document.getElementById("root"))},95:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.1e450b31.chunk.js.map