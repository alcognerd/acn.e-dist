import{d as R,r as c,e as B,j as t,y as K}from"./index-r2lIzz2d.js";import{F as L,g as M,a as Y}from"./api-CJ7_z0NO.js";import{u as b}from"./useQuery-Bf5wyyD2.js";import{T as $}from"./index-DoghrkRD.js";import{b as G}from"./index-CNB7QPp0.js";import"./iconBase-DA2yPp48.js";const U=()=>new Promise(a=>{if(document.getElementById("razorpay-script"))return a(!0);const r=document.createElement("script");r.id="razorpay-script",r.src="https://checkout.razorpay.com/v1/checkout.js",r.onload=()=>a(!0),r.onerror=()=>a(!1),document.body.appendChild(r)}),re=()=>{var v,I,E;const a=R(),[r,u]=c.useState(""),[_,m]=c.useState(""),[J,p]=c.useState("idle"),[g,f]=c.useState(!1),[n,P]=c.useState([]),[y,C]=c.useState(""),[h,T]=c.useState(""),[x,k]=c.useState(""),q=B(),{data:o}=b({queryKey:["eventId",a.eventId],queryFn:()=>L(a.eventId)}),{data:w,error:Q,isError:X,isPending:Z}=b({queryKey:["getGroupByEventId",a.eventId],queryFn:()=>M(a.eventId)}),{data:s,refetch:A}=b({queryKey:["appliedEvents",a.eventId],queryFn:()=>Y(a.eventId)});c.useEffect(()=>{if(w&&Array.isArray(s==null?void 0:s.groupIds)){const e=w.filter(d=>!s.groupIds.some(l=>l._id===d._id));P(e),u(""),m("")}},[w,s]),console.log("selectedevent: "+r),console.log(s);const O=e=>{const d=e.target.value,l=n==null?void 0:n.find(j=>j._id===d);u(d),m((l==null?void 0:l.name)||"")},F=async()=>{var S;if(!y||!h||!x.match(/^\d{10}$/)){alert("Please enter valid Name, Email & 10-digit Mobile Number.");return}if(p("processing"),f(!0),!await U()||a.eventId===void 0){alert("Razorpay SDK failed to load. Are you online?");return}const l=await(await fetch("/api/payment/create-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:((S=o==null?void 0:o.event)==null?void 0:S.amount)*100,currency:"INR",receipt:"receipt#1",groupId:r}),credentials:"include"})).json();if(l.error){K.error(l.message),console.error("Order creation failed:",l.error),u(""),m(""),p("try again"),f(!1);return}const j={key:"rzp_test_4U6XLOaE1ZjUcl",amount:l.amount,currency:l.currency,name:"SyncEventUp",description:"Test Transaction",order_id:l.id,prefill:{name:y,email:h,contact:x},handler:async function(i){const z=await fetch("/api/payment/verify-payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({groupId:r,eventId:a==null?void 0:a.eventId,razorpay_order_id:i==null?void 0:i.razorpay_order_id,razorpay_payment_id:i==null?void 0:i.razorpay_payment_id,razorpay_signature:i==null?void 0:i.razorpay_signature}),credentials:"include"}),N=await z.json();z.status===200?(alert("Payment successful!"),await A(),u(""),m(""),p("success")):alert("Payment verification failed: "+(N==null?void 0:N.message)),f(!1)},theme:{color:"#1E40AF"}};new window.Razorpay(j).open()};return t.jsxs("div",{className:"flex flex-col gap-5 justify-center items-center min-h-screen rounded-fullp-4 sm:p-8 relative text-sm md:text-base lg:text-lg",children:[t.jsx(G,{size:20,onClick:()=>q("/events"),className:"cursor-pointer transition-all text-gray-400 ease-in-out hover:scale-150  rounded-full absolute left-4 top-4"}),t.jsxs("div",{className:" first-line:w-5/6 md:w-1/2 flex flex-col justify-around items-center bg-zinc-900 p-4 gap-2  rounded-lg",children:[t.jsxs("div",{className:"w-full flex flex-col gap-2",children:[t.jsx("input",{type:"text",placeholder:"Enter Your Name",value:y,className:"p-2 w-full text-gray-700 rounded-lg bg-white ",onChange:e=>C(e.target.value)}),t.jsx("input",{type:"email",placeholder:"Enter Your Email",value:h,className:"p-2 w-full text-gray-700 rounded-lg bg-white ",onChange:e=>T(e.target.value)}),t.jsx("input",{type:"tel",placeholder:"Enter Your Mobile Number",value:x,required:!0,className:"p-2 w-full text-gray-700 rounded-lg bg-white ",onChange:e=>k(e.target.value)})]}),t.jsx("div",{className:"h-full w-full flex ",children:(n==null?void 0:n.length)===0?t.jsx("h1",{className:"text-white h-4/5 w-full flex gap-2 ",children:"You have applied for all sub-events in this event"}):t.jsxs("select",{onChange:O,className:"w-full flex gap-2 p-2 rounded-md bg-white text-black",value:r,children:[t.jsx("option",{value:"",className:"p-2",disabled:!0,children:"Select an Event"}),n==null?void 0:n.map((e,d)=>t.jsx("option",{className:"p-2",value:e==null?void 0:e._id,children:e==null?void 0:e.name},d))]})}),t.jsxs("div",{className:"mt-4 w-full flex flex-col gap-2",children:[t.jsx("h1",{className:"text-white text-lg",children:r?`Payment for ${_}`:"Please select an event for payment"}),r?t.jsx("button",{className:`p-2 rounded-lg w-full ${g?"bg-gray-400 cursor-not-allowed":"bg-blue-700"} text-white`,onClick:F,disabled:g,children:g?"Processing...":`Pay ₹${(I=o==null?void 0:o.event)==null?void 0:I.amount}`}):t.jsx("h1",{className:"p-2 w-full text-gray-500 rounded-lg bg-white text-center",children:(v=o==null?void 0:o.event)==null?void 0:v.amount})]})]}),t.jsx("div",{className:"w-full flex justify-center items-center",children:t.jsx("ul",{className:"w-5/6 md:w-1/2 flex flex-col  rounded-lg gap-2 p-2 text-white bg-gray-400",children:(s==null?void 0:s.groupIds)&&((E=s==null?void 0:s.groupIds)==null?void 0:E.map(e=>t.jsxs("li",{className:"flex gap-2 justify-between bg-zinc-700 p-2 rounded-lg",children:[t.jsx("h1",{children:e==null?void 0:e.name}),t.jsx($,{color:"green",size:20})]},e==null?void 0:e._id)))})})]})};export{re as default};
