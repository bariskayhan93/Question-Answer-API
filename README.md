<article class="markdown-body entry-content container-lg" itemprop="text">
<h1 dir="auto"><a id="user-content-question-answer-rest-api" class="anchor" aria-hidden="true" href="#question-answer-rest-api"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>question-answer-rest-api</h1>
<p dir="auto">It's a restful api with async await structure on Node JS.
Used Express.js and mongoose.
Includes CRUID Operations with authorization using JWT and admin/user parameters.
Includes Image Upload proccess also.
All important config settings can be change at config.env (under config/env folder).</p>
<p dir="auto">For upload whole answers, questions and users data to mongoDB, please use command below at terminal:</p>
<div class="snippet-clipboard-content position-relative overflow-auto"><pre><code>npm run import
</code></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="npm run import
" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
    </clipboard-copy>
  </div></div>
<p dir="auto">For delete whole answers, questions and users data to mongoDB, please use command below at terminal:</p>
<div class="snippet-clipboard-content position-relative overflow-auto"><pre><code>npm run delete
</code></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="npm run delete
" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
    </clipboard-copy>
  </div></div>
<h1 dir="auto"><a id="user-content-user" class="anchor" aria-hidden="true" href="#user"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>User</h1>
<table>
<thead>
<tr>
<th>Route</th>
<th>HTTP Verb</th>
<th>POST body</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>/api/user</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>List all users.</td>
</tr>
<tr>
<td>/api/user/:id</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>List user's information with its id.</td>
</tr>
<tr>
<td>/api/user?limit=10</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Lists all users up to 10 pieces on JSON format.</td>
</tr>
<tr>
<td>/api/users?page=2</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Lists all users with page format on JSON data format.</td>
</tr>
<tr>
<td>/api/users?search=userName</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Search a user with query and response on JSON data format.</td>
</tr>
</tbody>
</table>
<h1 dir="auto"><a id="user-content-admin" class="anchor" aria-hidden="true" href="#admin"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Admin</h1>
<table>
<thead>
<tr>
<th>Route</th>
<th>HTTP Verb</th>
<th>POST body</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>/api/admin/block/:id</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Toggle block status of user.</td>
</tr>
<tr>
<td>/api/admin/user/:id</td>
<td><code>DELETE</code></td>
<td>Empty</td>
<td>Delete user with its questions.</td>
</tr>
</tbody>
</table>
<h1 dir="auto"><a id="user-content-auth" class="anchor" aria-hidden="true" href="#auth"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Auth</h1>
<table>
<thead>
<tr>
<th>Route</th>
<th>HTTP Verb</th>
<th>POST body</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>/api/auth/profile</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Sends User's information on JSON.</td>
</tr>
<tr>
<td>/api/auth/register</td>
<td><code>POST</code></td>
<td>{'name':'<Name>', 'email':'<a href="mailto:foo@gmail.com">foo@gmail.com</a>', 'password':'123456'}</td>
<td>Create a new user.</td>
</tr>
<tr>
<td>/api/auth/edit</td>
<td><code>PUT</code></td>
<td>{'name':'<Name>', 'email':'<a href="mailto:foo@gmail.com">foo@gmail.com</a>', 'password':'123456'}</td>
<td>Edit information of user with its token.</td>
</tr>
<tr>
<td>/api/auth/upload</td>
<td><code>POST</code></td>
<td>Key: 'profile_image' Value: image file</td>
<td>Upload a image for profile.</td>
</tr>
<tr>
<td>/api/auth/login</td>
<td><code>POST</code></td>
<td>{'email':'<a href="mailto:<Mail>"><Mail></a>', 'password':'123456'}</td>
<td>Log in.</td>
</tr>
<tr>
<td>/api/auth/logout</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Log out.</td>
</tr>
<tr>
<td>/api/auth/forgotpassword</td>
<td><code>POST</code></td>
<td>{'email:'<a href="mailto:<Mail>"><Mail></a>'}</td>
<td>Sends reset link to email.</td>
</tr>
<tr>
<td>/api/auth/resetpassword?resetPasswordToken="Reset Password Token"</td>
<td><code>POST</code></td>
<td>{'password:'<password>'}</td>
<td>Resets password with token.</td>
</tr>
</tbody>
</table>
<h1 dir="auto"><a id="user-content-questions" class="anchor" aria-hidden="true" href="#questions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Questions</h1>
<table>
<thead>
<tr>
<th>Route</th>
<th>HTTP Verb</th>
<th>POST body</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>/api/questions</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Lists all questions on JSON format</td>
</tr>
<tr>
<td>/api/questions?limit=10</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Lists all questions up to 10 pieces on JSON format.</td>
</tr>
<tr>
<td>/api/questions?page=2</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Lists all questions with page format on JSON data format.</td>
</tr>
<tr>
<td>/api/questions?search=QuestionName</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Search a question with query and response on JSON data format.</td>
</tr>
<tr>
<td>/api/questions?sortBy=most-answered</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Lists most answered questions on JSON format.</td>
</tr>
<tr>
<td>/api/questions?sortBy=most-liked</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Lists most liked questions on JSON format.</td>
</tr>
<tr>
<td>/api/questions/ask</td>
<td><code>POST</code></td>
<td>{'title':'New Question Title', 'content':'Content Text'}</td>
<td>Create a new question.</td>
</tr>
<tr>
<td>/api/questions/:id</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>List question and answers of question with its id.</td>
</tr>
<tr>
<td>/api/questions/:id/edit</td>
<td><code>PUT</code></td>
<td>{'title':'Question Title', 'content':'Content Text'}</td>
<td>Update question if user is owner it.</td>
</tr>
<tr>
<td>/api/questions/:id/delete</td>
<td><code>DELETE</code></td>
<td>EMPTY</td>
<td>Delete question if user is owner it.</td>
</tr>
<tr>
<td>/api/questions/:id/like</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Add user's id at likes of question.</td>
</tr>
<tr>
<td>/api/questions/:id/undo_like</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Remove user's id from likes of question.</td>
</tr>
</tbody>
</table>
<h1 dir="auto"><a id="user-content-answers" class="anchor" aria-hidden="true" href="#answers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Answers</h1>
<table>
<thead>
<tr>
<th>Route</th>
<th>HTTP Verb</th>
<th>POST body</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>/api/questions/:question_id/answers</td>
<td><code>POST</code></td>
<td>{'content':'This is an answer'}</td>
<td>Create a new answer of a question with its id.</td>
</tr>
<tr>
<td>/api/questions/:question_id/answers</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Lists all answers of question on JSON format.</td>
</tr>
<tr>
<td>/api/questions/:question_id/answers/:answer_id</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Get single answer information of question on JSON format.</td>
</tr>
<tr>
<td>/api/questions/:question_id/answers/:answer_id/edit</td>
<td><code>PUT</code></td>
<td>{'content':'This is new content of answer'}</td>
<td>Update Content of answer.</td>
</tr>
<tr>
<td>/api/questions/:question_id/answers/:answer_id/delete</td>
<td><code>DELETE</code></td>
<td>Empty</td>
<td>Delete an answer.</td>
</tr>
<tr>
<td>/api/questions/:question_id/answers/:answer_id/like</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Add user's id at likes of answer.</td>
</tr>
<tr>
<td>/api/questions/:question_id/answers/:answer_id/undo_like</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Remove user's id from likes of answer.</td>
</tr>
</tbody>
</table>
</article>


This project made as a homework for Mustafa Murat Coskun's UDEMY Course
