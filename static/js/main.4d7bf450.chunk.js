(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{32:function(t,e,o){t.exports=o(66)},65:function(t,e,o){},66:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(28),l=o.n(r),c=o(16),i=o(4),s=o(5),d=o(7),u=o(6),p=o(8),m=o(11),h=o(9),b=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{backgroundColor:"#eee",padding:"10px",borderBottom:"1px #333 dotted",textDecoration:o.props.todo.completed?"line-through":"none"}},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("span",{onClick:this.props.markComplete.bind(o,e)}," ",o),a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:f},"DEL"))}}]),e}(n.Component),f={background:"#bf4348",color:"#fff",border:"none",padding:"6px",borderRadius:"5px",cursor:"pointer",float:"right",fontSize:"0.5em",textDecoration:"none"},y=b,E=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return console.log(this.props.todos),this.props.todos.map((function(e){return a.a.createElement(y,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(n.Component),g=o(29),j=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},o.onSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o.onChange=function(t){return o.setState(Object(g.a)({},t.target.name,t.target.value))},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange,style:{flex:"10",padding:"5px"}}),a.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))}}]),e}(n.Component);var v={background:"#809c8e",color:"#fff",textAlign:"center",padding:"10px"},k={color:"#fff",textDecoration:"none"},O=function(){return a.a.createElement("header",{style:v},a.a.createElement("h1",null,"Todo List"),a.a.createElement(m.b,{style:k,to:"/react-todolist/"},"Home")," | ",a.a.createElement(m.b,{style:k,to:"/react-todolist/about"},"About"))};var x=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"About"),a.a.createElement("p",null," This is the Todolist app v1.0.0"),a.a.createElement("h3",null,"How do use this Todo List"),a.a.createElement("p",null,"Add a Todo task within the Todo text box.",a.a.createElement("br",null),"Cross-out the completed task by clicking on the text.",a.a.createElement("br",null),"Delete the task by clicking the DEL button located to the right."))},C=(o(45),o(12)),T=o.n(C),S=(o(65),function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},o.markComplete=function(t){o.setState({todos:o.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},o.delTodo=function(t){T.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return o.setState({todos:Object(c.a)(o.state.todos.filter((function(e){return e.id!==t})))})}))},o.addTodo=function(t){T.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return o.setState({todos:[].concat(Object(c.a)(o.state.todos),[t.data])})}))},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(O,null),a.a.createElement(h.a,{exact:!0,path:"/react-todolist/",render:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{addTodo:t.addTodo}),a.a.createElement(E,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(h.a,{path:"/react-todolist/about",component:x}))))}}]),e}(n.Component));l.a.render(a.a.createElement(S,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4d7bf450.chunk.js.map