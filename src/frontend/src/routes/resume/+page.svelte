<script>
  import { Avatar } from '@skeletonlabs/skeleton';

</script>

<h1 class="h1">Resume</h1>

<!-- <div class="card p-4">
  <div class="header">
    <h1 class="h1">Lukas Vozda</h1>
    <h2>Head of analytics, Proficio</h2>
  </div>
  <hr class="!border-t-8 !border-double" />
  <div class="experience">
    <h1 class="h1">
      Work experience
    </h1>
  </div>
</div> -->


<div class="container card variant-ringed-primary">
  <div class="header mx-auto flex md:flex-row flex-col ">
    <div class=" md:w-1/3 p-2">
      <Avatar src="lukas500.webp" width="w-64" rounded="rounded-full" />
      <!-- <img class="rounded" src="lukas500.webp" alt=""> -->
    </div>
    <div class="sm:w-full md:w-2/3 p-8">
      <div class="full-name">
        <h1 class="h1">Lukas Vozda</h1>
      </div>
      <div class="contact-info">
        <span class="email">Email: </span>
        <span class="email-val">john.doe@gmail.com</span>
        <span class="separator" />
        <span class="phone">Phone: </span>
        <span class="phone-val">111-222-3333</span>
      </div>

      <div class="about">
        <span class="position">Front-End Developer </span>
        <span class="desc">
          I am a front-end developer with more than 3 years of experience writing html, css, and js.
          I'm motivated, result-focused and seeking a successful team-oriented company with
          opportunity to grow.
        </span>
      </div>
    </div>
  </div>
  <hr class="!border-t-8 !border-double my-8" />
  
  <div class="details">
    <div class="section">
      <div class="section__title">Experience</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">KlowdBox</div>
            <div class="addr">San Fr, CA</div>
            <div class="duration">Jan 2011 - Feb 2015</div>
          </div>
          <div class="right">
            <div class="name">Fr developer</div>
            <div class="desc">did This and that</div>
          </div>
        </div>
        <div class="section__list-item">
          <div class="left">
            <div class="name">Akount</div>
            <div class="addr">San Monica, CA</div>
            <div class="duration">Jan 2011 - Feb 2015</div>
          </div>
          <div class="right">
            <div class="name">Fr developer</div>
            <div class="desc">did This and that</div>
          </div>
        </div>
      </div>
    </div>
    <hr class="!border-t-8 !border-double my-8" />
    <div class="section">
      <div class="section__title">Education</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">Sample Institute of technology</div>
            <div class="addr">San Fr, CA</div>
            <div class="duration">Jan 2011 - Feb 2015</div>
          </div>
          <div class="right">
            <div class="name">Fr developer</div>
            <div class="desc">did This and that</div>
          </div>
        </div>
        <div class="section__list-item">
          <div class="left">
            <div class="name">Akount</div>
            <div class="addr">San Monica, CA</div>
            <div class="duration">Jan 2011 - Feb 2015</div>
          </div>
          <div class="right">
            <div class="name">Fr developer</div>
            <div class="desc">did This and that</div>
          </div>
        </div>
      </div>
    </div>
    <hr class="!border-t-8 !border-double my-8" />
    <div class="section">
      <div class="section__title">Projects</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="name">DSP</div>
          <div class="text">
            I am a front-end developer with more than 3 years of experience writing html, css, and
            js. I'm motivated, result-focused and seeking a successful team-oriented company with
            opportunity to grow.
          </div>
        </div>

        <div class="section__list-item">
          <div class="name">DSP</div>
          <div class="text">
            I am a front-end developer with more than 3 years of experience writing html, css, and
            js. I'm motivated, result-focused and seeking a successful team-oriented company with
            opportunity to grow. <a href="/login">link</a>
          </div>
        </div>
      </div>
    </div>
    <hr class="!border-t-8 !border-double my-8" />
    <div class="section">
      <div class="section__title">Skills</div>
      <div class="skills">
        <div class="skills__item">
          <div class="left"><div class="name">Javascript</div></div>
          <div class="right">
            <input id="ck1" type="checkbox" checked />

            <label for="ck1" />
            <input id="ck2" type="checkbox" checked />

            <label for="ck2" />
            <input id="ck3" type="checkbox" />

            <label for="ck3" />
            <input id="ck4" type="checkbox" />
            <label for="ck4" />
            <input id="ck5" class="checked:dark:bg-red-700" type="checkbox" />
            <label for="ck5" />
          </div>
        </div>
      </div>
      <div class="skills__item">
        <div class="left"><div class="name">CSS</div></div>
        <div class="right">
          <input id="ck1" type="checkbox" checked />

          <label for="ck1" />
          <input id="ck2" type="checkbox" checked />

          <label for="ck2" />
          <input id="ck3" type="checkbox" />

          <label for="ck3" />
          <input id="ck4" type="checkbox" />
          <label for="ck4" />
          <input id="ck5" type="checkbox" />
          <label for="ck5" />
        </div>
      </div>
    </div>
    <hr class="!border-t-8 !border-double my-8" />
    <div class="section">
      <div class="section__title">Interests</div>
      <div class="section__list">
        <div class="section__list-item">Football, programming.</div>
      </div>
    </div>
  </div>
</div>


<style lang="scss">
  .container {
		max-width: 1024px;
		margin: 0px auto 0px;
		border-radius: 3px;
		padding: 40px;
		margin-top: 50px;
	}

	.header {
		margin-bottom: 30px;

		.full-name {
			font-size: 40px;

			margin-bottom: 5px;
		}

		.first-name {
			font-weight: 700;
		}

		.last-name {
			font-weight: 300;
		}

		.contact-info {
			margin-bottom: 20px;
		}

		.email,
		.phone {
			color: #999;
			font-weight: 300;
		}

		.separator {
			height: 10px;
			display: inline-block;
			border-left: 2px solid #999;
			margin: 0px 10px;
		}

		.position {
			font-weight: bold;
			display: inline-block;
			margin-right: 10px;
			text-decoration: underline;
		}
	}

	.details {
		line-height: 20px;

		.section {
			margin-bottom: 40px;
		}

		.section:last-of-type {
			margin-bottom: 0px;
		}

		.section__title {
			letter-spacing: 2px;
			color: #54afe4;
			font-weight: bold;
			margin-bottom: 10px;
			text-transform: uppercase;
		}

		.section__list-item {
			margin-bottom: 40px;
		}

		.section__list-item:last-of-type {
			margin-bottom: 0;
		}

		.left,
		.right {
			vertical-align: top;
			display: inline-block;
		}

		.left {
			width: 60%;
		}

		.right {
			tex-align: right;
			width: 39%;
		}

		.name {
			font-weight: bold;
		}

		a {
			text-decoration: none;
			color: #000;
			font-style: italic;
		}

		a:hover {
			text-decoration: underline;
			color: #000;
		}

		.skills {
		}

		.skills__item {
			margin-bottom: 10px;
		}

		.skills__item .right {
			input {
				display: none;
			}

			label {
				display: inline-block;
				width: 20px;
				height: 20px;
				background: #c3def3;
				border-radius: 20px;
				margin-right: 3px;
			}

			input:checked + label {
				background: #79a9ce;
			}
		}
  }
</style>