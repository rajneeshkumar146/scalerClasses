/**
 * try to render its react object 
 *  1. First Create react JSON object
 *  2. Write render method wo convert object into given html.
 * 
 * 
 *  Question : [HTML -> React Obj -> render algo -> HTML] 
 <div class="container">
        <h1>Count Down Timer</h1>
        <div class="timer__label">
            <h2 class="timer__label--hrs">Hours</h2>
            <h2 class="timer__label--sec">Second</h2>

            <div class="timer_inputs">
                <input type="number" maxlength="2" oninput="this.value=this.value.slice(0, this.maxLength)" id="sec">
            </div>

            <div class="container__btns">
                <button class="btn start" id="start">Start</button>
            </div>
        </div>
</div>
 * 
 * 
 * 
 */
