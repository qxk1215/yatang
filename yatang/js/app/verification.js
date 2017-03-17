$(function(){
   $("#login").validate({
      rules:{
         textname:"required",
         pawname:{
            required:true,
            minlength:6,
            maxlength:20
         },
      message:{
         message:"Validation error",
         textname:"6-20字符，支持字母、数字、-、_，不支持中文",
         minlength:"最少输出6个字符",
         maxlength:"最多输出20个字符"
         }
      }
   })
});

