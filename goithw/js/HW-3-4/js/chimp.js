var testWrapper = document.createElement("div");
testWrapper.className = "wrapper";
document.body.appendChild(testWrapper);

var testTitle = document.createElement("h1");
testTitle.classname = "heading1";
testWrapper.appendChild(testTitle);


testTitle.innerHTML = "<span class='title'>Programming Test</span>";

var testForm = document.createElement("form");
testForm.classname = "test";
testWrapper.appendChild(testForm);

var q1Text = document.createTextNode("1. Question 1?");
var q2Text = document.createTextNode("2. Question 2?");
var q3Text = document.createTextNode("3. Question 3?");

var a1Text = document.createTextNode("Option 1");
var a2Text = document.createTextNode("Option 2");
var a3Text = document.createTextNode("Option 3");

var Question1 = document.createElement("p");
testForm.appendChild(Question1);
Question1.appendChild(q1Text);

var Answer11 = document.createElement("input");
Answer11.id = "q11";
Answer11.setAttribute("type", "checkbox");
testForm.appendChild(Answer11);
var a11Label = document.createElement("label");
a11Label.setAttribute("for", "q11");
Answer11.appendChild(a11Label);
a11Label.appendChild(a1Text);

var Answer12 = document.createElement("input");
Answer12.id = "q12";
Answer12.setAttribute("type", "checkbox");
testForm.appendChild(Answer12);
var a12Label = document.createElement("label");
a11Label.setAttribute("for", "q12");
Answer12.appendChild(a12Label);
a12Label.appendChild(a2Text);

var Answer13 = document.createElement("input");
Answer13.id = "q13";
Answer13.setAttribute("type", "checkbox");
testForm.appendChild(Answer13);
var a13Label = document.createElement("label");
a13Label.setAttribute("for", "q13");
Answer13.appendChild(a11Label);
a11Label.appendChild(a3Text);

var Question2 = document.createElement("p");
testForm.appendChild(Question2);
Question2.appendChild(q2Text);

var Answer21 = document.createElement("input");
Answer21.id = "q21";
Answer21.setAttribute("type", "checkbox");
testForm.appendChild(Answer21);
var a21Label = document.createElement("label");
a21Label.setAttribute("for", "q21");
Answer21.appendChild(a21Label);
a21Label.appendChild(a1Text);

var Answer22 = document.createElement("input");
Answer22.id = "q22";
Answer22.setAttribute("type", "checkbox");
testForm.appendChild(Answer22);
var a22Label = document.createElement("label");
a22Label.setAttribute("for", "q22");
Answer22.appendChild(a22Label);
a22Label.appendChild(a2Text);

var Answer23 = document.createElement("input");
Answer23.id = "q23";
Answer23.setAttribute("type", "checkbox");
testForm.appendChild(Answer23);
var a23Label = document.createElement("label");
a23Label.setAttribute("for", "q23");
Answer23.appendChild(a11Label);
a11Label.appendChild(a3Text);



var Question3 = document.createElement("p");
testForm.appendChild(Question3);
Question3.appendChild(q3Text);

var Answer31 = document.createElement("input");
Answer31.id = "q31";
Answer31.setAttribute("type", "checkbox");
testForm.appendChild(Answer31);
var a31Label = document.createElement("label");
a31Label.setAttribute("for", "q31");
Answer31.appendChild(a31Label);
a31Label.appendChild(a1Text);

var Answer32 = document.createElement("input");
Answer32.id = "q32";
Answer32.setAttribute("type", "checkbox");
testForm.appendChild(Answer32);
var a32Label = document.createElement("label");
a32Label.setAttribute("for", "q32");
Answer32.appendChild(a32Label);
a32Label.appendChild(a2Text);

var Answer33 = document.createElement("input");
Answer33.id = "q33";
Answer33.setAttribute("type", "checkbox");
testForm.appendChild(Answer33);
var a33Label = document.createElement("label");
a33Label.setAttribute("for", "q33");
Answer33.appendChild(a11Label);
a11Label.appendChild(a3Text);
