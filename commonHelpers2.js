import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const l="feedback-form-state",t={feedbackForm:document.querySelector(".feedback-form")};t.userEmail=t.feedbackForm.elements.email;t.userMessage=t.feedbackForm.elements.message;const e={email:"",message:""};t.feedbackForm.addEventListener("submit",o);t.feedbackForm.addEventListener("input",r);function r(a){const s=a.target.name,m=a.target.value;e[s]=m,localStorage.setItem(l,JSON.stringify(e))}function o(a){var s,m;if(a.preventDefault(),e.email=(s=e.email)==null?void 0:s.trim(),e.message=(m=e.message)==null?void 0:m.trim(),!e.email||!e.message)return alert("Fill please all fields");console.log(e),localStorage.removeItem(l),e.email="",e.message="",t.feedbackForm.reset()}if(localStorage.getItem(l)!==null){const a=JSON.parse(localStorage.getItem(l));t.userEmail.value=a.email,t.userMessage.value=a.message,e.email=a.email,e.message=a.message}
//# sourceMappingURL=commonHelpers2.js.map
