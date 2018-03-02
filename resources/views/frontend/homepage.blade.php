<script src="{{ mix('js/app.js') }}"></script>
<div class="area_hotpic">
	<ul class="font_hotpic">
		<li class="natic">基于世界领先的人工智能平台</li>
		<li>基于世界领先的人工智能平台</li>
		<li>基于世界领先的人工智能平台</li>
	</ul>
</div>

<div class="container">
     <div class="content">
         <div class="title">
             <p>@{{ message }}</p>
         </div>
     </div>
 </div>

 <script type="text/javascript">
      new Vue({
         el: '.title',
         data: {
             message: 'Hello Laravel!'
         }
     })
 </script>