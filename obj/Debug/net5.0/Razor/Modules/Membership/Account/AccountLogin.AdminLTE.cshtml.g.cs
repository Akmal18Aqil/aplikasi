#pragma checksum "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "05af4123b9a8249cb67af63189d4a863e44e5d6a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Membership_Account_AccountLogin_AdminLTE), @"mvc.1.0.view", @"/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\akmal\InvoiceKu\Modules\_ViewImports.cshtml"
using Serenity;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\akmal\InvoiceKu\Modules\_ViewImports.cshtml"
using Serenity.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "D:\akmal\InvoiceKu\Modules\_ViewImports.cshtml"
using InvoiceKu;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "D:\akmal\InvoiceKu\Modules\_ViewImports.cshtml"
using Microsoft.AspNetCore.Html;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "D:\akmal\InvoiceKu\Modules\_ViewImports.cshtml"
using System.Text;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"05af4123b9a8249cb67af63189d4a863e44e5d6a", @"/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"239e15e7a4b0f1de762cbb51d9e3ccf8ba4ae064", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Membership_Account_AccountLogin_AdminLTE : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/Content/iCheck/square/blue.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Scripts/jquery.icheck.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\n");
#nullable restore
#line 4 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
  
    ViewData["Title"] = Texts.Forms.Membership.Login.FormTitle.ToString(Localizer);
    ViewData["PageId"] = "Login";
    ViewData["BodyClass"] = "login-page";
    Layout = MVC.Views.Shared._LayoutNoNavigation;

#line default
#line hidden
#nullable disable
            WriteLiteral("\n");
            DefineSection("Head", async() => {
                WriteLiteral("\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "05af4123b9a8249cb67af63189d4a863e44e5d6a5174", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "05af4123b9a8249cb67af63189d4a863e44e5d6a6350", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\n");
            }
            );
            WriteLiteral(@"
<script id=""Template_Membership_LoginPanel"" type=""text/template"">
    <div class=""s-Form"">
        <form id=""~_Form"" action="""">            
            <div id=""~_PropertyGrid""></div>
            <div class=""row"">
                <div class=""col-xs-7"">
                    <div class=""checkbox icheck"">
                        <label>
                            <input type=""checkbox""> ");
#nullable restore
#line 24 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
                                               Write(Texts.Forms.Membership.Login.RememberMe.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col-xs-5\">\n                    <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">");
#nullable restore
#line 29 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
                                                                                                   Write(Texts.Forms.Membership.Login.SignInButton.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</script>\n\n");
#nullable restore
#line 36 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
 if (DataMigrations.SkippedMigrations)
{

#line default
#line hidden
#nullable disable
            WriteLiteral(@"<div class=""alert alert-error alert-dismissible"">
    <button type=""button"" class=""close"" data-dismiss=""alert"" aria-hidden=""true"">×</button>
    <h4><i class=""icon fa fa-warning""></i> Warning!</h4>
    InvoiceKu skipped running migrations to avoid modifying an arbitrary database.
    If you'd like to run migrations on this database, remove the safety check 
    in SiteInitialization.RunMigrations method.
</div>
");
#nullable restore
#line 45 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
}

#line default
#line hidden
#nullable disable
            WriteLiteral("\n");
#nullable restore
#line 47 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
 if (ViewData["Activated"] != null)
{

#line default
#line hidden
#nullable disable
            WriteLiteral("<div class=\"alert alert-info alert-dismissible\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n    <h4><i class=\"icon fa fa-info\"></i>");
#nullable restore
#line 51 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
                                  Write(Localizer.Get("Dialogs.InformationTitle"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</h4>\n    ");
#nullable restore
#line 52 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
Write(Texts.Forms.Membership.SignUp.ActivationCompleteMessage.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n</div>\n");
#nullable restore
#line 54 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
}

#line default
#line hidden
#nullable disable
            WriteLiteral("\n<div class=\"login-box\">\n    <div class=\"login-logo\">\n        ");
#nullable restore
#line 58 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
   Write(Texts.Navigation.SiteTitle.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n    </div>\n    <div class=\"login-box-body\">\n        <p class=\"login-box-msg\">");
#nullable restore
#line 61 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
                            Write(Texts.Forms.Membership.Login.FormTitle.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\n        <div id=\"LoginPanel\">\n        </div>\n        <div class=\"social-auth-links text-center\">\n            <p>- ");
#nullable restore
#line 65 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
            Write(Texts.Forms.Membership.Login.OR.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral(" -</p>\n            <a href=\"#\" class=\"btn btn-block btn-social btn-facebook btn-flat\">\n                <i class=\"fa fa-facebook\"></i> ");
#nullable restore
#line 67 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
                                          Write(Texts.Forms.Membership.Login.FacebookButton.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n            </a>\n            <a href=\"#\" class=\"btn btn-block btn-social btn-google btn-flat\">\n                <i class=\"fa fa-google-plus\"></i> ");
#nullable restore
#line 70 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
                                             Write(Texts.Forms.Membership.Login.GoogleButton.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("\n            </a>\n        </div>\n        <a");
            BeginWriteAttribute("href", " href=\"", 2963, "\"", 3010, 1);
#nullable restore
#line 73 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
WriteAttributeValue("", 2970, Url.Content("~/Account/ForgotPassword"), 2970, 40, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 73 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
                                                      Write(Texts.Forms.Membership.Login.ForgotPassword.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("</a><br>\n        <a");
            BeginWriteAttribute("href", " href=\"", 3095, "\"", 3134, 1);
#nullable restore
#line 74 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
WriteAttributeValue("", 3102, Url.Content("~/Account/SignUp"), 3102, 32, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"text-center\">");
#nullable restore
#line 74 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
                                                                  Write(Texts.Forms.Membership.Login.SignUpButton.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</a>
    </div>
</div>

<script type=""text/javascript"">
jQuery(function() {
    new InvoiceKu.Membership.LoginPanel($('#LoginPanel')).init();
    $('.field.Username,.field.Password').addClass(""has-icon"");
    $('.field.Username input').after(""<span class='glyphicon glyphicon-user form-control-feedback'></span>"");
    $('.field.Password input').after(""<span class='glyphicon glyphicon-lock form-control-feedback'></span>"");
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
    });
");
#nullable restore
#line 89 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
 if (ViewData["Activated"] != null)
{
    

#line default
#line hidden
#nullable disable
            WriteLiteral("\n    $(function() { \n        $(\'#InvoiceKu_Membership_LoginPanel0_Username\').val(");
#nullable restore
#line 93 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
                                                       Write(Html.Raw(Serenity.JSON.Stringify(ViewData["Activated"])));

#line default
#line hidden
#nullable disable
            WriteLiteral(");\n        $(\'#InvoiceKu_Membership_LoginPanel0_Password\').focus();\n    });\n    ");
#nullable restore
#line 96 "D:\akmal\InvoiceKu\Modules\Membership\Account\AccountLogin.AdminLTE.cshtml"
           
}

#line default
#line hidden
#nullable disable
            WriteLiteral("});\n</script>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public InvoiceKu.IDataMigrations DataMigrations { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public Serenity.ITextLocalizer Localizer { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591