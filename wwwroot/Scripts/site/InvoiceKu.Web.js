﻿var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var LanguageColumns = /** @class */ (function () {
            function LanguageColumns() {
            }
            LanguageColumns.columnsKey = 'Administration.Language';
            return LanguageColumns;
        }());
        Administration.LanguageColumns = LanguageColumns;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var PermissionKeys;
        (function (PermissionKeys) {
            PermissionKeys.Security = "Administration:Security";
            PermissionKeys.Translation = "Administration:Translation";
            PermissionKeys.Tenant = "Administration:Tenant";
        })(PermissionKeys = Administration.PermissionKeys || (Administration.PermissionKeys = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var RoleColumns = /** @class */ (function () {
            function RoleColumns() {
            }
            RoleColumns.columnsKey = 'Administration.Role';
            return RoleColumns;
        }());
        Administration.RoleColumns = RoleColumns;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var TenantColumns = /** @class */ (function () {
            function TenantColumns() {
            }
            TenantColumns.columnsKey = 'Administration.Tenant';
            return TenantColumns;
        }());
        Administration.TenantColumns = TenantColumns;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var TenantForm = /** @class */ (function (_super) {
            __extends(TenantForm, _super);
            function TenantForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TenantForm.init) {
                    TenantForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(TenantForm, [
                        'TenantName', w0,
                        'Description', w1,
                        'Currency', w0,
                        'Street', w0,
                        'City', w0,
                        'State', w0,
                        'ZipCode', w0,
                        'Phone', w0,
                        'Email', w0,
                        'ProductNumberPrefix', w0,
                        'ProductNumberUseDate', w2,
                        'ProductNumberLength', w3,
                        'CustomerNumberPrefix', w0,
                        'CustomerNumberUseDate', w2,
                        'CustomerNumberLength', w3,
                        'SalesNumberPrefix', w0,
                        'SalesNumberUseDate', w2,
                        'SalesNumberLength', w3,
                        'InvoiceNumberPrefix', w0,
                        'InvoiceNumberUseDate', w2,
                        'InvoiceNumberLength', w3,
                        'InvoicePaymentNumberPrefix', w0,
                        'InvoicePaymentNumberUseDate', w2,
                        'InvoicePaymentNumberLength', w3,
                        'VendorNumberPrefix', w0,
                        'VendorNumberUseDate', w2,
                        'VendorNumberLength', w3,
                        'PurchaseNumberPrefix', w0,
                        'PurchaseNumberUseDate', w2,
                        'PurchaseNumberLength', w3,
                        'BillNumberPrefix', w0,
                        'BillNumberUseDate', w2,
                        'BillNumberLength', w3,
                        'BillPaymentNumberPrefix', w0,
                        'BillPaymentNumberUseDate', w2,
                        'BillPaymentNumberLength', w3,
                        'MaximumUser', w3
                    ]);
                }
                return _this;
            }
            TenantForm.formKey = 'Administration.Tenant';
            return TenantForm;
        }(Serenity.PrefixedContext));
        Administration.TenantForm = TenantForm;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var TenantRow;
        (function (TenantRow) {
            TenantRow.idProperty = 'TenantId';
            TenantRow.nameProperty = 'TenantName';
            TenantRow.localTextPrefix = 'Administration.Tenant';
            TenantRow.lookupKey = 'Administration.Tenant';
            function getLookup() {
                return Q.getLookup('Administration.Tenant');
            }
            TenantRow.getLookup = getLookup;
            TenantRow.deletePermission = 'Administration:Tenant';
            TenantRow.insertPermission = 'Administration:Tenant';
            TenantRow.readPermission = 'Administration:Tenant';
            TenantRow.updatePermission = 'Administration:Tenant';
        })(TenantRow = Administration.TenantRow || (Administration.TenantRow = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var TenantService;
        (function (TenantService) {
            TenantService.baseUrl = 'Administration/Tenant';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TenantService[x] = function (r, s, o) {
                    return Q.serviceRequest(TenantService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TenantService = Administration.TenantService || (Administration.TenantService = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var UserColumns = /** @class */ (function () {
            function UserColumns() {
            }
            UserColumns.columnsKey = 'Administration.User';
            return UserColumns;
        }());
        Administration.UserColumns = UserColumns;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'NewPassword', w0,
                        'OldPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = InvoiceKu.Membership || (InvoiceKu.Membership = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = InvoiceKu.Membership || (InvoiceKu.Membership = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = InvoiceKu.Membership || (InvoiceKu.Membership = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = InvoiceKu.Membership || (InvoiceKu.Membership = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'CompanyName', w0,
                        'DisplayName', w0,
                        'Email', w0,
                        'ConfirmEmail', w0,
                        'Password', w1,
                        'ConfirmPassword', w1
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = InvoiceKu.Membership || (InvoiceKu.Membership = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var BrandColumns = /** @class */ (function () {
            function BrandColumns() {
            }
            BrandColumns.columnsKey = 'Merchandise.Brand';
            return BrandColumns;
        }());
        Merchandise.BrandColumns = BrandColumns;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var BrandForm = /** @class */ (function (_super) {
            __extends(BrandForm, _super);
            function BrandForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BrandForm.init) {
                    BrandForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(BrandForm, [
                        'Name', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            BrandForm.formKey = 'Merchandise.Brand';
            return BrandForm;
        }(Serenity.PrefixedContext));
        Merchandise.BrandForm = BrandForm;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var BrandRow;
        (function (BrandRow) {
            BrandRow.idProperty = 'Id';
            BrandRow.nameProperty = 'Name';
            BrandRow.localTextPrefix = 'Merchandise.Brand';
            BrandRow.lookupKey = 'Merchandise.Brand';
            function getLookup() {
                return Q.getLookup('Merchandise.Brand');
            }
            BrandRow.getLookup = getLookup;
            BrandRow.deletePermission = 'Merchandise:Brand';
            BrandRow.insertPermission = 'Merchandise:Brand';
            BrandRow.readPermission = 'Merchandise:Brand';
            BrandRow.updatePermission = 'Merchandise:Brand';
        })(BrandRow = Merchandise.BrandRow || (Merchandise.BrandRow = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var BrandService;
        (function (BrandService) {
            BrandService.baseUrl = 'Merchandise/Brand';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BrandService[x] = function (r, s, o) {
                    return Q.serviceRequest(BrandService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BrandService = Merchandise.BrandService || (Merchandise.BrandService = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var CategoryColumns = /** @class */ (function () {
            function CategoryColumns() {
            }
            CategoryColumns.columnsKey = 'Merchandise.Category';
            return CategoryColumns;
        }());
        Merchandise.CategoryColumns = CategoryColumns;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var CategoryForm = /** @class */ (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryForm.init) {
                    CategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(CategoryForm, [
                        'Name', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            CategoryForm.formKey = 'Merchandise.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Merchandise.CategoryForm = CategoryForm;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'Id';
            CategoryRow.nameProperty = 'Name';
            CategoryRow.localTextPrefix = 'Merchandise.Category';
            CategoryRow.lookupKey = 'Merchandise.Category';
            function getLookup() {
                return Q.getLookup('Merchandise.Category');
            }
            CategoryRow.getLookup = getLookup;
            CategoryRow.deletePermission = 'Merchandise:Category';
            CategoryRow.insertPermission = 'Merchandise:Category';
            CategoryRow.readPermission = 'Merchandise:Category';
            CategoryRow.updatePermission = 'Merchandise:Category';
        })(CategoryRow = Merchandise.CategoryRow || (Merchandise.CategoryRow = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Merchandise/Category';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryService = Merchandise.CategoryService || (Merchandise.CategoryService = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var ColourColumns = /** @class */ (function () {
            function ColourColumns() {
            }
            ColourColumns.columnsKey = 'Merchandise.Colour';
            return ColourColumns;
        }());
        Merchandise.ColourColumns = ColourColumns;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var ColourForm = /** @class */ (function (_super) {
            __extends(ColourForm, _super);
            function ColourForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ColourForm.init) {
                    ColourForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(ColourForm, [
                        'Name', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            ColourForm.formKey = 'Merchandise.Colour';
            return ColourForm;
        }(Serenity.PrefixedContext));
        Merchandise.ColourForm = ColourForm;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var ColourRow;
        (function (ColourRow) {
            ColourRow.idProperty = 'Id';
            ColourRow.nameProperty = 'Name';
            ColourRow.localTextPrefix = 'Merchandise.Colour';
            ColourRow.lookupKey = 'Merchandise.Colour';
            function getLookup() {
                return Q.getLookup('Merchandise.Colour');
            }
            ColourRow.getLookup = getLookup;
            ColourRow.deletePermission = 'Merchandise:Colour';
            ColourRow.insertPermission = 'Merchandise:Colour';
            ColourRow.readPermission = 'Merchandise:Colour';
            ColourRow.updatePermission = 'Merchandise:Colour';
        })(ColourRow = Merchandise.ColourRow || (Merchandise.ColourRow = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var ColourService;
        (function (ColourService) {
            ColourService.baseUrl = 'Merchandise/Colour';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ColourService[x] = function (r, s, o) {
                    return Q.serviceRequest(ColourService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ColourService = Merchandise.ColourService || (Merchandise.ColourService = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var FlavourColumns = /** @class */ (function () {
            function FlavourColumns() {
            }
            FlavourColumns.columnsKey = 'Merchandise.Flavour';
            return FlavourColumns;
        }());
        Merchandise.FlavourColumns = FlavourColumns;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var FlavourForm = /** @class */ (function (_super) {
            __extends(FlavourForm, _super);
            function FlavourForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FlavourForm.init) {
                    FlavourForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(FlavourForm, [
                        'Name', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            FlavourForm.formKey = 'Merchandise.Flavour';
            return FlavourForm;
        }(Serenity.PrefixedContext));
        Merchandise.FlavourForm = FlavourForm;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var FlavourRow;
        (function (FlavourRow) {
            FlavourRow.idProperty = 'Id';
            FlavourRow.nameProperty = 'Name';
            FlavourRow.localTextPrefix = 'Merchandise.Flavour';
            FlavourRow.lookupKey = 'Merchandise.Flavour';
            function getLookup() {
                return Q.getLookup('Merchandise.Flavour');
            }
            FlavourRow.getLookup = getLookup;
            FlavourRow.deletePermission = 'Merchandise:Flavour';
            FlavourRow.insertPermission = 'Merchandise:Flavour';
            FlavourRow.readPermission = 'Merchandise:Flavour';
            FlavourRow.updatePermission = 'Merchandise:Flavour';
        })(FlavourRow = Merchandise.FlavourRow || (Merchandise.FlavourRow = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var FlavourService;
        (function (FlavourService) {
            FlavourService.baseUrl = 'Merchandise/Flavour';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FlavourService[x] = function (r, s, o) {
                    return Q.serviceRequest(FlavourService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FlavourService = Merchandise.FlavourService || (Merchandise.FlavourService = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var ProductColumns = /** @class */ (function () {
            function ProductColumns() {
            }
            ProductColumns.columnsKey = 'Merchandise.Product';
            return ProductColumns;
        }());
        Merchandise.ProductColumns = ProductColumns;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var ProductForm = /** @class */ (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductForm.init) {
                    ProductForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.DecimalEditor;
                    Q.initFormType(ProductForm, [
                        'Name', w0,
                        'InternalCode', w0,
                        'Barcode', w0,
                        'Description', w1,
                        'UomId', w2,
                        'Picture', w3,
                        'BrandId', w2,
                        'CategoryId', w2,
                        'SizeId', w2,
                        'ColourId', w2,
                        'FlavourId', w2,
                        'CurrencyName', w0,
                        'PurchasePrice', w4,
                        'PurchaseTaxId', w2,
                        'SalesPrice', w4,
                        'SalesTaxId', w2
                    ]);
                }
                return _this;
            }
            ProductForm.formKey = 'Merchandise.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Merchandise.ProductForm = ProductForm;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'Id';
            ProductRow.nameProperty = 'Name';
            ProductRow.localTextPrefix = 'Merchandise.Product';
            ProductRow.lookupKey = 'Merchandise.Product';
            function getLookup() {
                return Q.getLookup('Merchandise.Product');
            }
            ProductRow.getLookup = getLookup;
            ProductRow.deletePermission = 'Merchandise:Product';
            ProductRow.insertPermission = 'Merchandise:Product';
            ProductRow.readPermission = 'Merchandise:Product';
            ProductRow.updatePermission = 'Merchandise:Product';
        })(ProductRow = Merchandise.ProductRow || (Merchandise.ProductRow = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Merchandise/Product';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Currency'
            ].forEach(function (x) {
                ProductService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductService = Merchandise.ProductService || (Merchandise.ProductService = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var SizeColumns = /** @class */ (function () {
            function SizeColumns() {
            }
            SizeColumns.columnsKey = 'Merchandise.Size';
            return SizeColumns;
        }());
        Merchandise.SizeColumns = SizeColumns;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var SizeForm = /** @class */ (function (_super) {
            __extends(SizeForm, _super);
            function SizeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SizeForm.init) {
                    SizeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(SizeForm, [
                        'Name', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            SizeForm.formKey = 'Merchandise.Size';
            return SizeForm;
        }(Serenity.PrefixedContext));
        Merchandise.SizeForm = SizeForm;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var SizeRow;
        (function (SizeRow) {
            SizeRow.idProperty = 'Id';
            SizeRow.nameProperty = 'Name';
            SizeRow.localTextPrefix = 'Merchandise.Size';
            SizeRow.lookupKey = 'Merchandise.Size';
            function getLookup() {
                return Q.getLookup('Merchandise.Size');
            }
            SizeRow.getLookup = getLookup;
            SizeRow.deletePermission = 'Merchandise:Size';
            SizeRow.insertPermission = 'Merchandise:Size';
            SizeRow.readPermission = 'Merchandise:Size';
            SizeRow.updatePermission = 'Merchandise:Size';
        })(SizeRow = Merchandise.SizeRow || (Merchandise.SizeRow = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var SizeService;
        (function (SizeService) {
            SizeService.baseUrl = 'Merchandise/Size';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SizeService[x] = function (r, s, o) {
                    return Q.serviceRequest(SizeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SizeService = Merchandise.SizeService || (Merchandise.SizeService = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var UomColumns = /** @class */ (function () {
            function UomColumns() {
            }
            UomColumns.columnsKey = 'Merchandise.Uom';
            return UomColumns;
        }());
        Merchandise.UomColumns = UomColumns;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var UomForm = /** @class */ (function (_super) {
            __extends(UomForm, _super);
            function UomForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UomForm.init) {
                    UomForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(UomForm, [
                        'Name', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            UomForm.formKey = 'Merchandise.Uom';
            return UomForm;
        }(Serenity.PrefixedContext));
        Merchandise.UomForm = UomForm;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var UomRow;
        (function (UomRow) {
            UomRow.idProperty = 'Id';
            UomRow.nameProperty = 'Name';
            UomRow.localTextPrefix = 'Merchandise.Uom';
            UomRow.lookupKey = 'Merchandise.Uom';
            function getLookup() {
                return Q.getLookup('Merchandise.Uom');
            }
            UomRow.getLookup = getLookup;
            UomRow.deletePermission = 'Merchandise:Uom';
            UomRow.insertPermission = 'Merchandise:Uom';
            UomRow.readPermission = 'Merchandise:Uom';
            UomRow.updatePermission = 'Merchandise:Uom';
        })(UomRow = Merchandise.UomRow || (Merchandise.UomRow = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var UomService;
        (function (UomService) {
            UomService.baseUrl = 'Merchandise/Uom';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UomService[x] = function (r, s, o) {
                    return Q.serviceRequest(UomService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UomService = Merchandise.UomService || (Merchandise.UomService = {}));
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillColumns = /** @class */ (function () {
            function BillColumns() {
            }
            BillColumns.columnsKey = 'Purchase.Bill';
            return BillColumns;
        }());
        Purchase.BillColumns = BillColumns;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillDetailColumns = /** @class */ (function () {
            function BillDetailColumns() {
            }
            BillDetailColumns.columnsKey = 'Purchase.BillDetail';
            return BillDetailColumns;
        }());
        Purchase.BillDetailColumns = BillDetailColumns;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillDetailForm = /** @class */ (function (_super) {
            __extends(BillDetailForm, _super);
            function BillDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BillDetailForm.init) {
                    BillDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(BillDetailForm, [
                        'ProductId', w0,
                        'Price', w1,
                        'Qty', w1,
                        'Discount', w1,
                        'TaxPercentage', w1,
                        'SubTotal', w1,
                        'BeforeTax', w1,
                        'TaxAmount', w1,
                        'Total', w1
                    ]);
                }
                return _this;
            }
            BillDetailForm.formKey = 'Purchase.BillDetail';
            return BillDetailForm;
        }(Serenity.PrefixedContext));
        Purchase.BillDetailForm = BillDetailForm;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillDetailRow;
        (function (BillDetailRow) {
            BillDetailRow.idProperty = 'Id';
            BillDetailRow.nameProperty = 'ProductName';
            BillDetailRow.localTextPrefix = 'Purchase.BillDetail';
            BillDetailRow.lookupKey = 'Purchase.BillDetail';
            function getLookup() {
                return Q.getLookup('Purchase.BillDetail');
            }
            BillDetailRow.getLookup = getLookup;
            BillDetailRow.deletePermission = 'Purchase:Bill';
            BillDetailRow.insertPermission = 'Purchase:Bill';
            BillDetailRow.readPermission = 'Purchase:Bill';
            BillDetailRow.updatePermission = 'Purchase:Bill';
        })(BillDetailRow = Purchase.BillDetailRow || (Purchase.BillDetailRow = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillDetailService;
        (function (BillDetailService) {
            BillDetailService.baseUrl = 'Purchase/BillDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BillDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(BillDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BillDetailService = Purchase.BillDetailService || (Purchase.BillDetailService = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillForm = /** @class */ (function (_super) {
            __extends(BillForm, _super);
            function BillForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BillForm.init) {
                    BillForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.LookupEditor;
                    var w4 = Purchase.BillDetailEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = Purchase.BillPaymentEditor;
                    Q.initFormType(BillForm, [
                        'Number', w0,
                        'BillDate', w1,
                        'Description', w2,
                        'PurchaseOrderId', w3,
                        'ExternalReferenceNumber', w0,
                        'ItemList', w4,
                        'CurrencyName', w0,
                        'SubTotal', w5,
                        'Discount', w5,
                        'BeforeTax', w5,
                        'TaxAmount', w5,
                        'OtherCharge', w5,
                        'Total', w5,
                        'VendorName', w0,
                        'VendorStreet', w0,
                        'VendorCity', w0,
                        'VendorState', w0,
                        'VendorZipCode', w0,
                        'VendorPhone', w0,
                        'VendorEmail', w0,
                        'BillPaymentList', w6
                    ]);
                }
                return _this;
            }
            BillForm.formKey = 'Purchase.Bill';
            return BillForm;
        }(Serenity.PrefixedContext));
        Purchase.BillForm = BillForm;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillPaymentColumns = /** @class */ (function () {
            function BillPaymentColumns() {
            }
            BillPaymentColumns.columnsKey = 'Purchase.BillPayment';
            return BillPaymentColumns;
        }());
        Purchase.BillPaymentColumns = BillPaymentColumns;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillPaymentForm = /** @class */ (function (_super) {
            __extends(BillPaymentForm, _super);
            function BillPaymentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BillPaymentForm.init) {
                    BillPaymentForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.DateEditor;
                    Q.initFormType(BillPaymentForm, [
                        'Number', w0,
                        'Description', w1,
                        'BillId', w2,
                        'BillAmount', w3,
                        'CurrencyName', w0,
                        'PaymentDate', w4,
                        'CashBankId', w2,
                        'PaymentAmount', w3,
                        'VendorName', w0,
                        'VendorStreet', w0,
                        'VendorCity', w0,
                        'VendorState', w0,
                        'VendorZipCode', w0,
                        'VendorPhone', w0,
                        'VendorEmail', w0
                    ]);
                }
                return _this;
            }
            BillPaymentForm.formKey = 'Purchase.BillPayment';
            return BillPaymentForm;
        }(Serenity.PrefixedContext));
        Purchase.BillPaymentForm = BillPaymentForm;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillPaymentRow;
        (function (BillPaymentRow) {
            BillPaymentRow.idProperty = 'Id';
            BillPaymentRow.nameProperty = 'Number';
            BillPaymentRow.localTextPrefix = 'Purchase.BillPayment';
            BillPaymentRow.lookupKey = 'Purchase.BillPayment';
            function getLookup() {
                return Q.getLookup('Purchase.BillPayment');
            }
            BillPaymentRow.getLookup = getLookup;
            BillPaymentRow.deletePermission = 'Purchase:BillPayment';
            BillPaymentRow.insertPermission = 'Purchase:BillPayment';
            BillPaymentRow.readPermission = 'Purchase:BillPayment';
            BillPaymentRow.updatePermission = 'Purchase:BillPayment';
        })(BillPaymentRow = Purchase.BillPaymentRow || (Purchase.BillPaymentRow = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillPaymentService;
        (function (BillPaymentService) {
            BillPaymentService.baseUrl = 'Purchase/BillPayment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Currency'
            ].forEach(function (x) {
                BillPaymentService[x] = function (r, s, o) {
                    return Q.serviceRequest(BillPaymentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BillPaymentService = Purchase.BillPaymentService || (Purchase.BillPaymentService = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillRow;
        (function (BillRow) {
            BillRow.idProperty = 'Id';
            BillRow.nameProperty = 'Number';
            BillRow.localTextPrefix = 'Purchase.Bill';
            BillRow.lookupKey = 'Purchase.Bill';
            function getLookup() {
                return Q.getLookup('Purchase.Bill');
            }
            BillRow.getLookup = getLookup;
            BillRow.deletePermission = 'Purchase:Bill';
            BillRow.insertPermission = 'Purchase:Bill';
            BillRow.readPermission = 'Purchase:Bill';
            BillRow.updatePermission = 'Purchase:Bill';
        })(BillRow = Purchase.BillRow || (Purchase.BillRow = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillService;
        (function (BillService) {
            BillService.baseUrl = 'Purchase/Bill';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Currency'
            ].forEach(function (x) {
                BillService[x] = function (r, s, o) {
                    return Q.serviceRequest(BillService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BillService = Purchase.BillService || (Purchase.BillService = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderColumns = /** @class */ (function () {
            function PurchaseOrderColumns() {
            }
            PurchaseOrderColumns.columnsKey = 'Purchase.PurchaseOrder';
            return PurchaseOrderColumns;
        }());
        Purchase.PurchaseOrderColumns = PurchaseOrderColumns;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailColumns = /** @class */ (function () {
            function PurchaseOrderDetailColumns() {
            }
            PurchaseOrderDetailColumns.columnsKey = 'Purchase.PurchaseOrderDetail';
            return PurchaseOrderDetailColumns;
        }());
        Purchase.PurchaseOrderDetailColumns = PurchaseOrderDetailColumns;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailForm = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailForm, _super);
            function PurchaseOrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseOrderDetailForm.init) {
                    PurchaseOrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(PurchaseOrderDetailForm, [
                        'ProductId', w0,
                        'Price', w1,
                        'Qty', w1,
                        'Discount', w1,
                        'TaxPercentage', w1,
                        'SubTotal', w1,
                        'BeforeTax', w1,
                        'TaxAmount', w1,
                        'Total', w1
                    ]);
                }
                return _this;
            }
            PurchaseOrderDetailForm.formKey = 'Purchase.PurchaseOrderDetail';
            return PurchaseOrderDetailForm;
        }(Serenity.PrefixedContext));
        Purchase.PurchaseOrderDetailForm = PurchaseOrderDetailForm;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailRow;
        (function (PurchaseOrderDetailRow) {
            PurchaseOrderDetailRow.idProperty = 'Id';
            PurchaseOrderDetailRow.nameProperty = 'ProductName';
            PurchaseOrderDetailRow.localTextPrefix = 'PurchaseOrder.PurchaseOrderDetail';
            PurchaseOrderDetailRow.lookupKey = 'PurchaseOrder.PurchaseOrderDetail';
            function getLookup() {
                return Q.getLookup('PurchaseOrder.PurchaseOrderDetail');
            }
            PurchaseOrderDetailRow.getLookup = getLookup;
            PurchaseOrderDetailRow.deletePermission = 'Purchase:PurchaseOrder';
            PurchaseOrderDetailRow.insertPermission = 'Purchase:PurchaseOrder';
            PurchaseOrderDetailRow.readPermission = 'Purchase:PurchaseOrder';
            PurchaseOrderDetailRow.updatePermission = 'Purchase:PurchaseOrder';
        })(PurchaseOrderDetailRow = Purchase.PurchaseOrderDetailRow || (Purchase.PurchaseOrderDetailRow = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailService;
        (function (PurchaseOrderDetailService) {
            PurchaseOrderDetailService.baseUrl = 'Purchase/PurchaseOrderDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseOrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseOrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseOrderDetailService = Purchase.PurchaseOrderDetailService || (Purchase.PurchaseOrderDetailService = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderForm = /** @class */ (function (_super) {
            __extends(PurchaseOrderForm, _super);
            function PurchaseOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseOrderForm.init) {
                    PurchaseOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.LookupEditor;
                    var w4 = Purchase.PurchaseOrderDetailEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = Purchase.BillEditor;
                    Q.initFormType(PurchaseOrderForm, [
                        'Number', w0,
                        'OrderDate', w1,
                        'Description', w2,
                        'VendorId', w3,
                        'ItemList', w4,
                        'CurrencyName', w0,
                        'SubTotal', w5,
                        'Discount', w5,
                        'BeforeTax', w5,
                        'TaxAmount', w5,
                        'OtherCharge', w5,
                        'Total', w5,
                        'VendorName', w0,
                        'VendorStreet', w0,
                        'VendorCity', w0,
                        'VendorState', w0,
                        'VendorZipCode', w0,
                        'VendorPhone', w0,
                        'VendorEmail', w0,
                        'BillList', w6
                    ]);
                }
                return _this;
            }
            PurchaseOrderForm.formKey = 'Purchase.PurchaseOrder';
            return PurchaseOrderForm;
        }(Serenity.PrefixedContext));
        Purchase.PurchaseOrderForm = PurchaseOrderForm;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderRow;
        (function (PurchaseOrderRow) {
            PurchaseOrderRow.idProperty = 'Id';
            PurchaseOrderRow.nameProperty = 'Number';
            PurchaseOrderRow.localTextPrefix = 'Purchase.PurchaseOrder';
            PurchaseOrderRow.lookupKey = 'Purchase.PurchaseOrder';
            function getLookup() {
                return Q.getLookup('Purchase.PurchaseOrder');
            }
            PurchaseOrderRow.getLookup = getLookup;
            PurchaseOrderRow.deletePermission = 'Purchase:PurchaseOrder';
            PurchaseOrderRow.insertPermission = 'Purchase:PurchaseOrder';
            PurchaseOrderRow.readPermission = 'Purchase:PurchaseOrder';
            PurchaseOrderRow.updatePermission = 'Purchase:PurchaseOrder';
        })(PurchaseOrderRow = Purchase.PurchaseOrderRow || (Purchase.PurchaseOrderRow = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderService;
        (function (PurchaseOrderService) {
            PurchaseOrderService.baseUrl = 'Purchase/PurchaseOrder';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Currency'
            ].forEach(function (x) {
                PurchaseOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseOrderService = Purchase.PurchaseOrderService || (Purchase.PurchaseOrderService = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var VendorColumns = /** @class */ (function () {
            function VendorColumns() {
            }
            VendorColumns.columnsKey = 'Purchase.Vendor';
            return VendorColumns;
        }());
        Purchase.VendorColumns = VendorColumns;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var VendorContactColumns = /** @class */ (function () {
            function VendorContactColumns() {
            }
            VendorContactColumns.columnsKey = 'Purchase.VendorContact';
            return VendorContactColumns;
        }());
        Purchase.VendorContactColumns = VendorContactColumns;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var VendorContactForm = /** @class */ (function (_super) {
            __extends(VendorContactForm, _super);
            function VendorContactForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VendorContactForm.init) {
                    VendorContactForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(VendorContactForm, [
                        'Name', w0,
                        'Description', w1,
                        'Street', w0,
                        'City', w0,
                        'State', w0,
                        'ZipCode', w0,
                        'Phone', w0,
                        'Email', w0
                    ]);
                }
                return _this;
            }
            VendorContactForm.formKey = 'Purchase.VendorContact';
            return VendorContactForm;
        }(Serenity.PrefixedContext));
        Purchase.VendorContactForm = VendorContactForm;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var VendorContactRow;
        (function (VendorContactRow) {
            VendorContactRow.idProperty = 'Id';
            VendorContactRow.nameProperty = 'Name';
            VendorContactRow.localTextPrefix = 'Purchase.VendorContact';
            VendorContactRow.lookupKey = 'Purchase.VendorContact';
            function getLookup() {
                return Q.getLookup('Purchase.VendorContact');
            }
            VendorContactRow.getLookup = getLookup;
            VendorContactRow.deletePermission = 'Purchase:Vendor';
            VendorContactRow.insertPermission = 'Purchase:Vendor';
            VendorContactRow.readPermission = 'Purchase:Vendor';
            VendorContactRow.updatePermission = 'Purchase:Vendor';
        })(VendorContactRow = Purchase.VendorContactRow || (Purchase.VendorContactRow = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var VendorContactService;
        (function (VendorContactService) {
            VendorContactService.baseUrl = 'Purchase/VendorContact';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VendorContactService[x] = function (r, s, o) {
                    return Q.serviceRequest(VendorContactService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VendorContactService = Purchase.VendorContactService || (Purchase.VendorContactService = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var VendorForm = /** @class */ (function (_super) {
            __extends(VendorForm, _super);
            function VendorForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VendorForm.init) {
                    VendorForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = Purchase.VendorContactEditor;
                    Q.initFormType(VendorForm, [
                        'Name', w0,
                        'Description', w1,
                        'Street', w0,
                        'City', w0,
                        'State', w0,
                        'ZipCode', w0,
                        'Phone', w0,
                        'Email', w0,
                        'ContactList', w2
                    ]);
                }
                return _this;
            }
            VendorForm.formKey = 'Purchase.Vendor';
            return VendorForm;
        }(Serenity.PrefixedContext));
        Purchase.VendorForm = VendorForm;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var VendorRow;
        (function (VendorRow) {
            VendorRow.idProperty = 'Id';
            VendorRow.nameProperty = 'Name';
            VendorRow.localTextPrefix = 'Purchase.Vendor';
            VendorRow.lookupKey = 'Purchase.Vendor';
            function getLookup() {
                return Q.getLookup('Purchase.Vendor');
            }
            VendorRow.getLookup = getLookup;
            VendorRow.deletePermission = 'Purchase:Vendor';
            VendorRow.insertPermission = 'Purchase:Vendor';
            VendorRow.readPermission = 'Purchase:Vendor';
            VendorRow.updatePermission = 'Purchase:Vendor';
        })(VendorRow = Purchase.VendorRow || (Purchase.VendorRow = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var VendorService;
        (function (VendorService) {
            VendorService.baseUrl = 'Purchase/Vendor';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VendorService[x] = function (r, s, o) {
                    return Q.serviceRequest(VendorService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VendorService = Purchase.VendorService || (Purchase.VendorService = {}));
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var CustomerColumns = /** @class */ (function () {
            function CustomerColumns() {
            }
            CustomerColumns.columnsKey = 'Sales.Customer';
            return CustomerColumns;
        }());
        Sales.CustomerColumns = CustomerColumns;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var CustomerContactColumns = /** @class */ (function () {
            function CustomerContactColumns() {
            }
            CustomerContactColumns.columnsKey = 'Sales.CustomerContact';
            return CustomerContactColumns;
        }());
        Sales.CustomerContactColumns = CustomerContactColumns;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var CustomerContactForm = /** @class */ (function (_super) {
            __extends(CustomerContactForm, _super);
            function CustomerContactForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerContactForm.init) {
                    CustomerContactForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(CustomerContactForm, [
                        'Name', w0,
                        'Description', w1,
                        'Street', w0,
                        'City', w0,
                        'State', w0,
                        'ZipCode', w0,
                        'Phone', w0,
                        'Email', w0
                    ]);
                }
                return _this;
            }
            CustomerContactForm.formKey = 'Sales.CustomerContact';
            return CustomerContactForm;
        }(Serenity.PrefixedContext));
        Sales.CustomerContactForm = CustomerContactForm;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var CustomerContactRow;
        (function (CustomerContactRow) {
            CustomerContactRow.idProperty = 'Id';
            CustomerContactRow.nameProperty = 'Name';
            CustomerContactRow.localTextPrefix = 'Sales.CustomerContact';
            CustomerContactRow.lookupKey = 'Sales.CustomerContact';
            function getLookup() {
                return Q.getLookup('Sales.CustomerContact');
            }
            CustomerContactRow.getLookup = getLookup;
            CustomerContactRow.deletePermission = 'Sales:Customer';
            CustomerContactRow.insertPermission = 'Sales:Customer';
            CustomerContactRow.readPermission = 'Sales:Customer';
            CustomerContactRow.updatePermission = 'Sales:Customer';
        })(CustomerContactRow = Sales.CustomerContactRow || (Sales.CustomerContactRow = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var CustomerContactService;
        (function (CustomerContactService) {
            CustomerContactService.baseUrl = 'Sales/CustomerContact';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerContactService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerContactService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerContactService = Sales.CustomerContactService || (Sales.CustomerContactService = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = Sales.CustomerContactEditor;
                    Q.initFormType(CustomerForm, [
                        'Name', w0,
                        'Description', w1,
                        'Street', w0,
                        'City', w0,
                        'State', w0,
                        'ZipCode', w0,
                        'Phone', w0,
                        'Email', w0,
                        'ContactList', w2
                    ]);
                }
                return _this;
            }
            CustomerForm.formKey = 'Sales.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Sales.CustomerForm = CustomerForm;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'Id';
            CustomerRow.nameProperty = 'Name';
            CustomerRow.localTextPrefix = 'Sales.Customer';
            CustomerRow.lookupKey = 'Sales.Customer';
            function getLookup() {
                return Q.getLookup('Sales.Customer');
            }
            CustomerRow.getLookup = getLookup;
            CustomerRow.deletePermission = 'Sales:Customer';
            CustomerRow.insertPermission = 'Sales:Customer';
            CustomerRow.readPermission = 'Sales:Customer';
            CustomerRow.updatePermission = 'Sales:Customer';
        })(CustomerRow = Sales.CustomerRow || (Sales.CustomerRow = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Sales/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Sales.CustomerService || (Sales.CustomerService = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceColumns = /** @class */ (function () {
            function InvoiceColumns() {
            }
            InvoiceColumns.columnsKey = 'Sales.Invoice';
            return InvoiceColumns;
        }());
        Sales.InvoiceColumns = InvoiceColumns;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceDetailColumns = /** @class */ (function () {
            function InvoiceDetailColumns() {
            }
            InvoiceDetailColumns.columnsKey = 'Sales.InvoiceDetail';
            return InvoiceDetailColumns;
        }());
        Sales.InvoiceDetailColumns = InvoiceDetailColumns;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceDetailForm = /** @class */ (function (_super) {
            __extends(InvoiceDetailForm, _super);
            function InvoiceDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvoiceDetailForm.init) {
                    InvoiceDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(InvoiceDetailForm, [
                        'ProductId', w0,
                        'Price', w1,
                        'Qty', w1,
                        'Discount', w1,
                        'TaxPercentage', w1,
                        'SubTotal', w1,
                        'BeforeTax', w1,
                        'TaxAmount', w1,
                        'Total', w1
                    ]);
                }
                return _this;
            }
            InvoiceDetailForm.formKey = 'Sales.InvoiceDetail';
            return InvoiceDetailForm;
        }(Serenity.PrefixedContext));
        Sales.InvoiceDetailForm = InvoiceDetailForm;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceDetailRow;
        (function (InvoiceDetailRow) {
            InvoiceDetailRow.idProperty = 'Id';
            InvoiceDetailRow.nameProperty = 'ProductName';
            InvoiceDetailRow.localTextPrefix = 'Sales.InvoiceDetail';
            InvoiceDetailRow.lookupKey = 'Sales.InvoiceDetail';
            function getLookup() {
                return Q.getLookup('Sales.InvoiceDetail');
            }
            InvoiceDetailRow.getLookup = getLookup;
            InvoiceDetailRow.deletePermission = 'Sales:Invoice';
            InvoiceDetailRow.insertPermission = 'Sales:Invoice';
            InvoiceDetailRow.readPermission = 'Sales:Invoice';
            InvoiceDetailRow.updatePermission = 'Sales:Invoice';
        })(InvoiceDetailRow = Sales.InvoiceDetailRow || (Sales.InvoiceDetailRow = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceDetailService;
        (function (InvoiceDetailService) {
            InvoiceDetailService.baseUrl = 'Sales/InvoiceDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoiceDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoiceDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoiceDetailService = Sales.InvoiceDetailService || (Sales.InvoiceDetailService = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceForm = /** @class */ (function (_super) {
            __extends(InvoiceForm, _super);
            function InvoiceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvoiceForm.init) {
                    InvoiceForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.LookupEditor;
                    var w4 = Sales.InvoiceDetailEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = Sales.InvoicePaymentEditor;
                    Q.initFormType(InvoiceForm, [
                        'Number', w0,
                        'InvoiceDate', w1,
                        'Description', w2,
                        'SalesOrderId', w3,
                        'ItemList', w4,
                        'CurrencyName', w0,
                        'SubTotal', w5,
                        'Discount', w5,
                        'BeforeTax', w5,
                        'TaxAmount', w5,
                        'OtherCharge', w5,
                        'Total', w5,
                        'CustomerName', w0,
                        'CustomerStreet', w0,
                        'CustomerCity', w0,
                        'CustomerState', w0,
                        'CustomerZipCode', w0,
                        'CustomerPhone', w0,
                        'CustomerEmail', w0,
                        'InvoicePaymentList', w6
                    ]);
                }
                return _this;
            }
            InvoiceForm.formKey = 'Sales.Invoice';
            return InvoiceForm;
        }(Serenity.PrefixedContext));
        Sales.InvoiceForm = InvoiceForm;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoicePaymentColumns = /** @class */ (function () {
            function InvoicePaymentColumns() {
            }
            InvoicePaymentColumns.columnsKey = 'Sales.InvoicePayment';
            return InvoicePaymentColumns;
        }());
        Sales.InvoicePaymentColumns = InvoicePaymentColumns;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoicePaymentForm = /** @class */ (function (_super) {
            __extends(InvoicePaymentForm, _super);
            function InvoicePaymentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvoicePaymentForm.init) {
                    InvoicePaymentForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.DateEditor;
                    Q.initFormType(InvoicePaymentForm, [
                        'Number', w0,
                        'Description', w1,
                        'InvoiceId', w2,
                        'InvoiceAmount', w3,
                        'CurrencyName', w0,
                        'PaymentDate', w4,
                        'CashBankId', w2,
                        'PaymentAmount', w3,
                        'CustomerName', w0,
                        'CustomerStreet', w0,
                        'CustomerCity', w0,
                        'CustomerState', w0,
                        'CustomerZipCode', w0,
                        'CustomerPhone', w0,
                        'CustomerEmail', w0
                    ]);
                }
                return _this;
            }
            InvoicePaymentForm.formKey = 'Sales.InvoicePayment';
            return InvoicePaymentForm;
        }(Serenity.PrefixedContext));
        Sales.InvoicePaymentForm = InvoicePaymentForm;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoicePaymentRow;
        (function (InvoicePaymentRow) {
            InvoicePaymentRow.idProperty = 'Id';
            InvoicePaymentRow.nameProperty = 'Number';
            InvoicePaymentRow.localTextPrefix = 'Sales.InvoicePayment';
            InvoicePaymentRow.lookupKey = 'Sales.InvoicePayment';
            function getLookup() {
                return Q.getLookup('Sales.InvoicePayment');
            }
            InvoicePaymentRow.getLookup = getLookup;
            InvoicePaymentRow.deletePermission = 'Sales:InvoicePayment';
            InvoicePaymentRow.insertPermission = 'Sales:InvoicePayment';
            InvoicePaymentRow.readPermission = 'Sales:InvoicePayment';
            InvoicePaymentRow.updatePermission = 'Sales:InvoicePayment';
        })(InvoicePaymentRow = Sales.InvoicePaymentRow || (Sales.InvoicePaymentRow = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoicePaymentService;
        (function (InvoicePaymentService) {
            InvoicePaymentService.baseUrl = 'Sales/InvoicePayment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Currency'
            ].forEach(function (x) {
                InvoicePaymentService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoicePaymentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoicePaymentService = Sales.InvoicePaymentService || (Sales.InvoicePaymentService = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceRow;
        (function (InvoiceRow) {
            InvoiceRow.idProperty = 'Id';
            InvoiceRow.nameProperty = 'Number';
            InvoiceRow.localTextPrefix = 'Sales.Invoice';
            InvoiceRow.lookupKey = 'Sales.Invoice';
            function getLookup() {
                return Q.getLookup('Sales.Invoice');
            }
            InvoiceRow.getLookup = getLookup;
            InvoiceRow.deletePermission = 'Sales:Invoice';
            InvoiceRow.insertPermission = 'Sales:Invoice';
            InvoiceRow.readPermission = 'Sales:Invoice';
            InvoiceRow.updatePermission = 'Sales:Invoice';
        })(InvoiceRow = Sales.InvoiceRow || (Sales.InvoiceRow = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceService;
        (function (InvoiceService) {
            InvoiceService.baseUrl = 'Sales/Invoice';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Currency'
            ].forEach(function (x) {
                InvoiceService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoiceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoiceService = Sales.InvoiceService || (Sales.InvoiceService = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesChannelColumns = /** @class */ (function () {
            function SalesChannelColumns() {
            }
            SalesChannelColumns.columnsKey = 'Sales.SalesChannel';
            return SalesChannelColumns;
        }());
        Sales.SalesChannelColumns = SalesChannelColumns;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesChannelForm = /** @class */ (function (_super) {
            __extends(SalesChannelForm, _super);
            function SalesChannelForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesChannelForm.init) {
                    SalesChannelForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(SalesChannelForm, [
                        'Name', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            SalesChannelForm.formKey = 'Sales.SalesChannel';
            return SalesChannelForm;
        }(Serenity.PrefixedContext));
        Sales.SalesChannelForm = SalesChannelForm;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesChannelRow;
        (function (SalesChannelRow) {
            SalesChannelRow.idProperty = 'Id';
            SalesChannelRow.nameProperty = 'Name';
            SalesChannelRow.localTextPrefix = 'Sales.SalesChannel';
            SalesChannelRow.lookupKey = 'Sales.SalesChannel';
            function getLookup() {
                return Q.getLookup('Sales.SalesChannel');
            }
            SalesChannelRow.getLookup = getLookup;
            SalesChannelRow.deletePermission = 'Sales:SalesChannel';
            SalesChannelRow.insertPermission = 'Sales:SalesChannel';
            SalesChannelRow.readPermission = 'Sales:SalesChannel';
            SalesChannelRow.updatePermission = 'Sales:SalesChannel';
        })(SalesChannelRow = Sales.SalesChannelRow || (Sales.SalesChannelRow = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesChannelService;
        (function (SalesChannelService) {
            SalesChannelService.baseUrl = 'Sales/SalesChannel';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalesChannelService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesChannelService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesChannelService = Sales.SalesChannelService || (Sales.SalesChannelService = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesOrderColumns = /** @class */ (function () {
            function SalesOrderColumns() {
            }
            SalesOrderColumns.columnsKey = 'Sales.SalesOrder';
            return SalesOrderColumns;
        }());
        Sales.SalesOrderColumns = SalesOrderColumns;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesOrderDetailColumns = /** @class */ (function () {
            function SalesOrderDetailColumns() {
            }
            SalesOrderDetailColumns.columnsKey = 'Sales.SalesOrderDetail';
            return SalesOrderDetailColumns;
        }());
        Sales.SalesOrderDetailColumns = SalesOrderDetailColumns;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesOrderDetailForm = /** @class */ (function (_super) {
            __extends(SalesOrderDetailForm, _super);
            function SalesOrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesOrderDetailForm.init) {
                    SalesOrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(SalesOrderDetailForm, [
                        'ProductId', w0,
                        'Price', w1,
                        'Qty', w1,
                        'Discount', w1,
                        'TaxPercentage', w1,
                        'SubTotal', w1,
                        'BeforeTax', w1,
                        'TaxAmount', w1,
                        'Total', w1
                    ]);
                }
                return _this;
            }
            SalesOrderDetailForm.formKey = 'Sales.SalesOrderDetail';
            return SalesOrderDetailForm;
        }(Serenity.PrefixedContext));
        Sales.SalesOrderDetailForm = SalesOrderDetailForm;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesOrderDetailRow;
        (function (SalesOrderDetailRow) {
            SalesOrderDetailRow.idProperty = 'Id';
            SalesOrderDetailRow.nameProperty = 'ProductName';
            SalesOrderDetailRow.localTextPrefix = 'Sales.SalesOrderDetail';
            SalesOrderDetailRow.lookupKey = 'Sales.SalesOrderDetail';
            function getLookup() {
                return Q.getLookup('Sales.SalesOrderDetail');
            }
            SalesOrderDetailRow.getLookup = getLookup;
            SalesOrderDetailRow.deletePermission = 'Sales:SalesOrder';
            SalesOrderDetailRow.insertPermission = 'Sales:SalesOrder';
            SalesOrderDetailRow.readPermission = 'Sales:SalesOrder';
            SalesOrderDetailRow.updatePermission = 'Sales:SalesOrder';
        })(SalesOrderDetailRow = Sales.SalesOrderDetailRow || (Sales.SalesOrderDetailRow = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesOrderDetailService;
        (function (SalesOrderDetailService) {
            SalesOrderDetailService.baseUrl = 'Sales/SalesOrderDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalesOrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesOrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesOrderDetailService = Sales.SalesOrderDetailService || (Sales.SalesOrderDetailService = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesOrderForm = /** @class */ (function (_super) {
            __extends(SalesOrderForm, _super);
            function SalesOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesOrderForm.init) {
                    SalesOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.TextAreaEditor;
                    var w3 = s.LookupEditor;
                    var w4 = Sales.SalesOrderDetailEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = Sales.InvoiceEditor;
                    Q.initFormType(SalesOrderForm, [
                        'Number', w0,
                        'OrderDate', w1,
                        'Description', w2,
                        'CustomerId', w3,
                        'SalesChannelId', w3,
                        'ItemList', w4,
                        'CurrencyName', w0,
                        'SubTotal', w5,
                        'Discount', w5,
                        'BeforeTax', w5,
                        'TaxAmount', w5,
                        'OtherCharge', w5,
                        'Total', w5,
                        'CustomerName', w0,
                        'CustomerStreet', w0,
                        'CustomerCity', w0,
                        'CustomerState', w0,
                        'CustomerZipCode', w0,
                        'CustomerPhone', w0,
                        'CustomerEmail', w0,
                        'InvoiceList', w6
                    ]);
                }
                return _this;
            }
            SalesOrderForm.formKey = 'Sales.SalesOrder';
            return SalesOrderForm;
        }(Serenity.PrefixedContext));
        Sales.SalesOrderForm = SalesOrderForm;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesOrderRow;
        (function (SalesOrderRow) {
            SalesOrderRow.idProperty = 'Id';
            SalesOrderRow.nameProperty = 'Number';
            SalesOrderRow.localTextPrefix = 'Sales.SalesOrder';
            SalesOrderRow.lookupKey = 'Sales.SalesOrder';
            function getLookup() {
                return Q.getLookup('Sales.SalesOrder');
            }
            SalesOrderRow.getLookup = getLookup;
            SalesOrderRow.deletePermission = 'Sales:SalesOrder';
            SalesOrderRow.insertPermission = 'Sales:SalesOrder';
            SalesOrderRow.readPermission = 'Sales:SalesOrder';
            SalesOrderRow.updatePermission = 'Sales:SalesOrder';
        })(SalesOrderRow = Sales.SalesOrderRow || (Sales.SalesOrderRow = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesOrderService;
        (function (SalesOrderService) {
            SalesOrderService.baseUrl = 'Sales/SalesOrder';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Currency'
            ].forEach(function (x) {
                SalesOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesOrderService = Sales.SalesOrderService || (Sales.SalesOrderService = {}));
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var CashBankColumns = /** @class */ (function () {
            function CashBankColumns() {
            }
            CashBankColumns.columnsKey = 'Settings.CashBank';
            return CashBankColumns;
        }());
        Settings.CashBankColumns = CashBankColumns;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var CashBankForm = /** @class */ (function (_super) {
            __extends(CashBankForm, _super);
            function CashBankForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CashBankForm.init) {
                    CashBankForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(CashBankForm, [
                        'Name', w0,
                        'Description', w1,
                        'AccountNumber', w0,
                        'Street', w0,
                        'City', w0,
                        'State', w0,
                        'ZipCode', w0,
                        'Phone', w0,
                        'Email', w0
                    ]);
                }
                return _this;
            }
            CashBankForm.formKey = 'Settings.CashBank';
            return CashBankForm;
        }(Serenity.PrefixedContext));
        Settings.CashBankForm = CashBankForm;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var CashBankRow;
        (function (CashBankRow) {
            CashBankRow.idProperty = 'Id';
            CashBankRow.nameProperty = 'Name';
            CashBankRow.localTextPrefix = 'Settings.CashBank';
            CashBankRow.lookupKey = 'Settings.CashBank';
            function getLookup() {
                return Q.getLookup('Settings.CashBank');
            }
            CashBankRow.getLookup = getLookup;
            CashBankRow.deletePermission = 'Settings:CashBank';
            CashBankRow.insertPermission = 'Settings:CashBank';
            CashBankRow.readPermission = 'Settings:CashBank';
            CashBankRow.updatePermission = 'Settings:CashBank';
        })(CashBankRow = Settings.CashBankRow || (Settings.CashBankRow = {}));
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var CashBankService;
        (function (CashBankService) {
            CashBankService.baseUrl = 'Settings/CashBank';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CashBankService[x] = function (r, s, o) {
                    return Q.serviceRequest(CashBankService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CashBankService = Settings.CashBankService || (Settings.CashBankService = {}));
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var MyCompanyColumns = /** @class */ (function () {
            function MyCompanyColumns() {
            }
            MyCompanyColumns.columnsKey = 'Settings.MyCompany';
            return MyCompanyColumns;
        }());
        Settings.MyCompanyColumns = MyCompanyColumns;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var MyCompanyForm = /** @class */ (function (_super) {
            __extends(MyCompanyForm, _super);
            function MyCompanyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MyCompanyForm.init) {
                    MyCompanyForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(MyCompanyForm, [
                        'TenantName', w0,
                        'Description', w1,
                        'Currency', w0,
                        'Street', w0,
                        'City', w0,
                        'State', w0,
                        'ZipCode', w0,
                        'Phone', w0,
                        'Email', w0,
                        'ProductNumberPrefix', w0,
                        'ProductNumberUseDate', w2,
                        'ProductNumberLength', w3,
                        'CustomerNumberPrefix', w0,
                        'CustomerNumberUseDate', w2,
                        'CustomerNumberLength', w3,
                        'SalesNumberPrefix', w0,
                        'SalesNumberUseDate', w2,
                        'SalesNumberLength', w3,
                        'InvoiceNumberPrefix', w0,
                        'InvoiceNumberUseDate', w2,
                        'InvoiceNumberLength', w3,
                        'InvoicePaymentNumberPrefix', w0,
                        'InvoicePaymentNumberUseDate', w2,
                        'InvoicePaymentNumberLength', w3,
                        'VendorNumberPrefix', w0,
                        'VendorNumberUseDate', w2,
                        'VendorNumberLength', w3,
                        'PurchaseNumberPrefix', w0,
                        'PurchaseNumberUseDate', w2,
                        'PurchaseNumberLength', w3,
                        'BillNumberPrefix', w0,
                        'BillNumberUseDate', w2,
                        'BillNumberLength', w3,
                        'BillPaymentNumberPrefix', w0,
                        'BillPaymentNumberUseDate', w2,
                        'BillPaymentNumberLength', w3,
                        'MaximumUser', w3
                    ]);
                }
                return _this;
            }
            MyCompanyForm.formKey = 'Settings.MyCompany';
            return MyCompanyForm;
        }(Serenity.PrefixedContext));
        Settings.MyCompanyForm = MyCompanyForm;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var MyCompanyRow;
        (function (MyCompanyRow) {
            MyCompanyRow.idProperty = 'TenantId';
            MyCompanyRow.nameProperty = 'TenantName';
            MyCompanyRow.localTextPrefix = 'Settings.MyCompany';
            MyCompanyRow.deletePermission = 'Settings:MyCompany';
            MyCompanyRow.insertPermission = 'Settings:MyCompany';
            MyCompanyRow.readPermission = 'Settings:MyCompany';
            MyCompanyRow.updatePermission = 'Settings:MyCompany';
        })(MyCompanyRow = Settings.MyCompanyRow || (Settings.MyCompanyRow = {}));
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var MyCompanyService;
        (function (MyCompanyService) {
            MyCompanyService.baseUrl = 'Settings/MyCompany';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MyCompanyService[x] = function (r, s, o) {
                    return Q.serviceRequest(MyCompanyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MyCompanyService = Settings.MyCompanyService || (Settings.MyCompanyService = {}));
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var PurchaseTaxColumns = /** @class */ (function () {
            function PurchaseTaxColumns() {
            }
            PurchaseTaxColumns.columnsKey = 'Settings.PurchaseTax';
            return PurchaseTaxColumns;
        }());
        Settings.PurchaseTaxColumns = PurchaseTaxColumns;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var PurchaseTaxForm = /** @class */ (function (_super) {
            __extends(PurchaseTaxForm, _super);
            function PurchaseTaxForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseTaxForm.init) {
                    PurchaseTaxForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(PurchaseTaxForm, [
                        'Name', w0,
                        'Description', w1,
                        'TaxRatePercentage', w2
                    ]);
                }
                return _this;
            }
            PurchaseTaxForm.formKey = 'Settings.PurchaseTax';
            return PurchaseTaxForm;
        }(Serenity.PrefixedContext));
        Settings.PurchaseTaxForm = PurchaseTaxForm;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var PurchaseTaxRow;
        (function (PurchaseTaxRow) {
            PurchaseTaxRow.idProperty = 'Id';
            PurchaseTaxRow.nameProperty = 'Name';
            PurchaseTaxRow.localTextPrefix = 'Settings.PurchaseTax';
            PurchaseTaxRow.lookupKey = 'Settings.PurchaseTax';
            function getLookup() {
                return Q.getLookup('Settings.PurchaseTax');
            }
            PurchaseTaxRow.getLookup = getLookup;
            PurchaseTaxRow.deletePermission = 'Settings:PurchaseTax';
            PurchaseTaxRow.insertPermission = 'Settings:PurchaseTax';
            PurchaseTaxRow.readPermission = 'Settings:PurchaseTax';
            PurchaseTaxRow.updatePermission = 'Settings:PurchaseTax';
        })(PurchaseTaxRow = Settings.PurchaseTaxRow || (Settings.PurchaseTaxRow = {}));
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var PurchaseTaxService;
        (function (PurchaseTaxService) {
            PurchaseTaxService.baseUrl = 'Settings/PurchaseTax';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseTaxService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseTaxService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseTaxService = Settings.PurchaseTaxService || (Settings.PurchaseTaxService = {}));
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var SalesTaxColumns = /** @class */ (function () {
            function SalesTaxColumns() {
            }
            SalesTaxColumns.columnsKey = 'Settings.SalesTax';
            return SalesTaxColumns;
        }());
        Settings.SalesTaxColumns = SalesTaxColumns;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var SalesTaxForm = /** @class */ (function (_super) {
            __extends(SalesTaxForm, _super);
            function SalesTaxForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesTaxForm.init) {
                    SalesTaxForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(SalesTaxForm, [
                        'Name', w0,
                        'Description', w1,
                        'TaxRatePercentage', w2
                    ]);
                }
                return _this;
            }
            SalesTaxForm.formKey = 'Settings.SalesTax';
            return SalesTaxForm;
        }(Serenity.PrefixedContext));
        Settings.SalesTaxForm = SalesTaxForm;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var SalesTaxRow;
        (function (SalesTaxRow) {
            SalesTaxRow.idProperty = 'Id';
            SalesTaxRow.nameProperty = 'Name';
            SalesTaxRow.localTextPrefix = 'Settings.SalesTax';
            SalesTaxRow.lookupKey = 'Settings.SalesTax';
            function getLookup() {
                return Q.getLookup('Settings.SalesTax');
            }
            SalesTaxRow.getLookup = getLookup;
            SalesTaxRow.deletePermission = 'Settings:SalesTax';
            SalesTaxRow.insertPermission = 'Settings:SalesTax';
            SalesTaxRow.readPermission = 'Settings:SalesTax';
            SalesTaxRow.updatePermission = 'Settings:SalesTax';
        })(SalesTaxRow = Settings.SalesTaxRow || (Settings.SalesTaxRow = {}));
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var SalesTaxService;
        (function (SalesTaxService) {
            SalesTaxService.baseUrl = 'Settings/SalesTax';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalesTaxService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesTaxService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesTaxService = Settings.SalesTaxService || (Settings.SalesTaxService = {}));
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Texts;
    (function (Texts) {
        InvoiceKu['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Tenant: { BillNumberLength: 1, BillNumberPrefix: 1, BillNumberUseDate: 1, BillPaymentNumberLength: 1, BillPaymentNumberPrefix: 1, BillPaymentNumberUseDate: 1, City: 1, Currency: 1, CustomerNumberLength: 1, CustomerNumberPrefix: 1, CustomerNumberUseDate: 1, Description: 1, Email: 1, InsertDate: 1, InsertUserId: 1, InvoiceNumberLength: 1, InvoiceNumberPrefix: 1, InvoiceNumberUseDate: 1, InvoicePaymentNumberLength: 1, InvoicePaymentNumberPrefix: 1, InvoicePaymentNumberUseDate: 1, MaximumUser: 1, Phone: 1, ProductNumberLength: 1, ProductNumberPrefix: 1, ProductNumberUseDate: 1, PurchaseNumberLength: 1, PurchaseNumberPrefix: 1, PurchaseNumberUseDate: 1, SalesNumberLength: 1, SalesNumberPrefix: 1, SalesNumberUseDate: 1, State: 1, Street: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, VendorNumberLength: 1, VendorNumberPrefix: 1, VendorNumberUseDate: 1, ZipCode: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Merchandise: { Brand: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1 }, Category: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1 }, Colour: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1 }, Flavour: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1 }, Product: { Barcode: 1, BrandId: 1, BrandName: 1, CategoryId: 1, CategoryName: 1, ColourId: 1, ColourName: 1, CurrencyName: 1, Description: 1, FlavourId: 1, FlavourName: 1, Id: 1, InsertDate: 1, InsertUserId: 1, InternalCode: 1, Name: 1, Picture: 1, PurchasePrice: 1, PurchaseTaxId: 1, PurchaseTaxName: 1, SalesPrice: 1, SalesTaxId: 1, SalesTaxName: 1, SizeId: 1, SizeName: 1, TenantId: 1, TenantName: 1, UomId: 1, UomName: 1, UpdateDate: 1, UpdateUserId: 1 }, Size: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1 }, Uom: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1 } }, Purchase: { Bill: { BeforeTax: 1, BillDate: 1, BillPaymentList: 1, CurrencyName: 1, Description: 1, Discount: 1, ExternalReferenceNumber: 1, Id: 1, InsertDate: 1, InsertUserId: 1, ItemList: 1, Number: 1, OtherCharge: 1, ProcurementGroup: 1, PurchaseOrderId: 1, PurchaseOrderNumber: 1, SubTotal: 1, TaxAmount: 1, TenantId: 1, TenantName: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1, VendorCity: 1, VendorEmail: 1, VendorId: 1, VendorName: 1, VendorPhone: 1, VendorState: 1, VendorStreet: 1, VendorZipCode: 1 }, BillDetail: { BeforeTax: 1, BillId: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Price: 1, ProductId: 1, ProductName: 1, Qty: 1, SubTotal: 1, TaxAmount: 1, TaxPercentage: 1, TenantId: 1, TenantName: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 }, BillPayment: { BillAmount: 1, BillId: 1, BillNumber: 1, CashBankId: 1, CashBankName: 1, CurrencyName: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Number: 1, PaymentAmount: 1, PaymentDate: 1, ProcurementGroup: 1, PurchaseOrderId: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, VendorCity: 1, VendorEmail: 1, VendorId: 1, VendorName: 1, VendorPhone: 1, VendorState: 1, VendorStreet: 1, VendorZipCode: 1 }, PurchaseOrder: { BeforeTax: 1, BillList: 1, CurrencyName: 1, Description: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, ItemList: 1, Number: 1, OrderDate: 1, OtherCharge: 1, ProcurementGroup: 1, SubTotal: 1, TaxAmount: 1, TenantId: 1, TenantName: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1, VendorCity: 1, VendorEmail: 1, VendorId: 1, VendorName: 1, VendorPhone: 1, VendorState: 1, VendorStreet: 1, VendorZipCode: 1 }, Vendor: { City: 1, ContactList: 1, Description: 1, Email: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, Phone: 1, State: 1, Street: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, ZipCode: 1 }, VendorContact: { City: 1, Description: 1, Email: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, Phone: 1, State: 1, Street: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, VendorId: 1, ZipCode: 1 } }, PurchaseOrder: { PurchaseOrderDetail: { BeforeTax: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Price: 1, ProductId: 1, ProductName: 1, PurchaseOrderId: 1, Qty: 1, SubTotal: 1, TaxAmount: 1, TaxPercentage: 1, TenantId: 1, TenantName: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 } }, Sales: { Customer: { City: 1, ContactList: 1, Description: 1, Email: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, Phone: 1, State: 1, Street: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, ZipCode: 1 }, CustomerContact: { City: 1, CustomerId: 1, Description: 1, Email: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, Phone: 1, State: 1, Street: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, ZipCode: 1 }, Invoice: { BeforeTax: 1, CurrencyName: 1, CustomerCity: 1, CustomerEmail: 1, CustomerId: 1, CustomerName: 1, CustomerPhone: 1, CustomerState: 1, CustomerStreet: 1, CustomerZipCode: 1, Description: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, InvoiceDate: 1, InvoicePaymentList: 1, ItemList: 1, Number: 1, OtherCharge: 1, SalesGroup: 1, SalesOrderId: 1, SalesOrderNumber: 1, SubTotal: 1, TaxAmount: 1, TenantId: 1, TenantName: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 }, InvoiceDetail: { BeforeTax: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, InvoiceId: 1, Price: 1, ProductId: 1, ProductName: 1, Qty: 1, SubTotal: 1, TaxAmount: 1, TaxPercentage: 1, TenantId: 1, TenantName: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 }, InvoicePayment: { CashBankId: 1, CashBankName: 1, CurrencyName: 1, CustomerCity: 1, CustomerEmail: 1, CustomerId: 1, CustomerName: 1, CustomerPhone: 1, CustomerState: 1, CustomerStreet: 1, CustomerZipCode: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, InvoiceAmount: 1, InvoiceId: 1, InvoiceNumber: 1, Number: 1, PaymentAmount: 1, PaymentDate: 1, SalesGroup: 1, SalesOrderId: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1 }, SalesChannel: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1 }, SalesOrder: { BeforeTax: 1, CurrencyName: 1, CustomerCity: 1, CustomerEmail: 1, CustomerId: 1, CustomerName: 1, CustomerPhone: 1, CustomerState: 1, CustomerStreet: 1, CustomerZipCode: 1, Description: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, InvoiceList: 1, ItemList: 1, Number: 1, OrderDate: 1, OtherCharge: 1, SalesChannelId: 1, SalesChannelName: 1, SalesGroup: 1, SubTotal: 1, TaxAmount: 1, TenantId: 1, TenantName: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 }, SalesOrderDetail: { BeforeTax: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Price: 1, ProductId: 1, ProductName: 1, Qty: 1, SalesOrderId: 1, SubTotal: 1, TaxAmount: 1, TaxPercentage: 1, TenantId: 1, TenantName: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 } }, Settings: { CashBank: { AccountNumber: 1, City: 1, Description: 1, Email: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, Phone: 1, State: 1, Street: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, ZipCode: 1 }, MyCompany: { BillNumberLength: 1, BillNumberPrefix: 1, BillNumberUseDate: 1, BillPaymentNumberLength: 1, BillPaymentNumberPrefix: 1, BillPaymentNumberUseDate: 1, City: 1, Currency: 1, CustomerNumberLength: 1, CustomerNumberPrefix: 1, CustomerNumberUseDate: 1, Description: 1, Email: 1, InsertDate: 1, InsertUserId: 1, InvoiceNumberLength: 1, InvoiceNumberPrefix: 1, InvoiceNumberUseDate: 1, InvoicePaymentNumberLength: 1, InvoicePaymentNumberPrefix: 1, InvoicePaymentNumberUseDate: 1, MaximumUser: 1, Phone: 1, ProductNumberLength: 1, ProductNumberPrefix: 1, ProductNumberUseDate: 1, PurchaseNumberLength: 1, PurchaseNumberPrefix: 1, PurchaseNumberUseDate: 1, SalesNumberLength: 1, SalesNumberPrefix: 1, SalesNumberUseDate: 1, State: 1, Street: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, VendorNumberLength: 1, VendorNumberPrefix: 1, VendorNumberUseDate: 1, ZipCode: 1 }, PurchaseTax: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TaxRatePercentage: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1 }, SalesTax: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TaxRatePercentage: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = InvoiceKu.Texts || (InvoiceKu.Texts = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = InvoiceKu.DialogUtils || (InvoiceKu.DialogUtils = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var TenantDialog = /** @class */ (function (_super) {
            __extends(TenantDialog, _super);
            function TenantDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.TenantForm(_this.idPrefix);
                return _this;
            }
            TenantDialog.prototype.getFormKey = function () { return Administration.TenantForm.formKey; };
            TenantDialog.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
            TenantDialog.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantDialog.prototype.getNameProperty = function () { return Administration.TenantRow.nameProperty; };
            TenantDialog.prototype.getService = function () { return Administration.TenantService.baseUrl; };
            TenantDialog.prototype.getDeletePermission = function () { return Administration.TenantRow.deletePermission; };
            TenantDialog.prototype.getInsertPermission = function () { return Administration.TenantRow.insertPermission; };
            TenantDialog.prototype.getUpdatePermission = function () { return Administration.TenantRow.updatePermission; };
            TenantDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TenantDialog);
            return TenantDialog;
        }(Serenity.EntityDialog));
        Administration.TenantDialog = TenantDialog;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var TenantGrid = /** @class */ (function (_super) {
            __extends(TenantGrid, _super);
            function TenantGrid(container) {
                return _super.call(this, container) || this;
            }
            TenantGrid.prototype.getColumnsKey = function () { return Administration.TenantColumns.columnsKey; };
            TenantGrid.prototype.getDialogType = function () { return Administration.TenantDialog; };
            TenantGrid.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
            TenantGrid.prototype.getInsertPermission = function () { return Administration.TenantRow.insertPermission; };
            TenantGrid.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantGrid.prototype.getService = function () { return Administration.TenantService.baseUrl; };
            TenantGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            TenantGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TenantGrid);
            return TenantGrid;
        }(Serenity.EntityGrid));
        Administration.TenantGrid = TenantGrid;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            return Q.Authorization.hasPermission(permissionKey);
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = InvoiceKu.Authorization || (InvoiceKu.Authorization = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys');
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        cssClass: 'btn btn-primary',
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        cssClass: 'btn btn-primary',
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = InvoiceKu.Administration || (InvoiceKu.Administration = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = InvoiceKu.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = InvoiceKu.LanguageList || (InvoiceKu.LanguageList = {}));
})(InvoiceKu || (InvoiceKu = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var InvoiceKu;
(function (InvoiceKu) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('InvoiceKu');
        Serenity.EntityDialog.defaultLanguageList = InvoiceKu.LanguageList.getValue;
        Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = InvoiceKu.ScriptInitialization || (InvoiceKu.ScriptInitialization = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = InvoiceKu.Common || (InvoiceKu.Common = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = InvoiceKu.Common || (InvoiceKu.Common = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = InvoiceKu.Common || (InvoiceKu.Common = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Membership;
    (function (Membership) {
        var JazzLoginPanel = /** @class */ (function (_super) {
            __extends(JazzLoginPanel, _super);
            function JazzLoginPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            JazzLoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            JazzLoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            JazzLoginPanel.prototype.getTemplate = function () {
                return "\n    <div class=\"s-Form\">\n        <form id=\"~_Form\" action=\"\">\n            <div id=\"~_PropertyGrid\"></div>\n            <div class=\"form-group text-left\">\n                <div class=\"checkbox checkbox-fill d-inline\">\n                    <input type=\"checkbox\" name=\"checkbox-fill-1\" id=\"checkbox-fill-a1\" checked=\"\">\n                    <label for=\"checkbox-fill-a1\" class=\"cr\"> Save credentials</label>\n                </div>\n            </div>\n            <button id=\"~_LoginButton\" class=\"btn btn-primary shadow-2 mb-4\" type=\"submit\">Login</button>\n            <p class=\"mb-2 text-muted\"><a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\">" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a></p>\n            <p class=\"mb-0 text-muted\"><a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\">" + Q.text("Forms.Membership.Login.SignUpButton") + "</a></p>\n        </form>\n    </div>\n";
            };
            JazzLoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], JazzLoginPanel);
            return JazzLoginPanel;
        }(Serenity.PropertyPanel));
        Membership.JazzLoginPanel = JazzLoginPanel;
    })(Membership = InvoiceKu.Membership || (InvoiceKu.Membership = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n            <div class=\"flex-layout\">\n                <div class=\"logo\"></div>\n                <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n                <form id=\"~_Form\" action=\"\">\n                    <div class=\"s-Form\">\n                        <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                            <div id=\"~_PropertyGrid\"></div>\n                            <div class=\"clear\"></div>\n                        </div>\n                        <div class=\"buttons\">\n                            <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                                " + Q.text("Forms.Membership.Login.SignInButton") + "\n                            </button>\n                        </div>\n                        <div class=\"actions\">\n                            <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                            <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                            <div class=\"clear\"></div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            ";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = InvoiceKu.Membership || (InvoiceKu.Membership = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('NewPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = InvoiceKu.Membership || (InvoiceKu.Membership = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = InvoiceKu.Membership || (InvoiceKu.Membership = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Membership;
    (function (Membership) {
        var JazzForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(JazzForgotPasswordPanel, _super);
            function JazzForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            JazzForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            JazzForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], JazzForgotPasswordPanel);
            return JazzForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.JazzForgotPasswordPanel = JazzForgotPasswordPanel;
    })(Membership = InvoiceKu.Membership || (InvoiceKu.Membership = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.NewPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = InvoiceKu.Membership || (InvoiceKu.Membership = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Membership;
    (function (Membership) {
        var JazzSignUpPanel = /** @class */ (function (_super) {
            __extends(JazzSignUpPanel, _super);
            function JazzSignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            CompanyName: _this.form.CompanyName.value,
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            JazzSignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            JazzSignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], JazzSignUpPanel);
            return JazzSignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.JazzSignUpPanel = JazzSignUpPanel;
    })(Membership = InvoiceKu.Membership || (InvoiceKu.Membership = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = InvoiceKu.Membership || (InvoiceKu.Membership = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var BrandDialog = /** @class */ (function (_super) {
            __extends(BrandDialog, _super);
            function BrandDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Merchandise.BrandForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            BrandDialog.prototype.getFormKey = function () { return Merchandise.BrandForm.formKey; };
            BrandDialog.prototype.getIdProperty = function () { return Merchandise.BrandRow.idProperty; };
            BrandDialog.prototype.getLocalTextPrefix = function () { return Merchandise.BrandRow.localTextPrefix; };
            BrandDialog.prototype.getNameProperty = function () { return Merchandise.BrandRow.nameProperty; };
            BrandDialog.prototype.getService = function () { return Merchandise.BrandService.baseUrl; };
            BrandDialog.prototype.getDeletePermission = function () { return Merchandise.BrandRow.deletePermission; };
            BrandDialog.prototype.getInsertPermission = function () { return Merchandise.BrandRow.insertPermission; };
            BrandDialog.prototype.getUpdatePermission = function () { return Merchandise.BrandRow.updatePermission; };
            BrandDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            BrandDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            BrandDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BrandDialog);
            return BrandDialog;
        }(Serenity.EntityDialog));
        Merchandise.BrandDialog = BrandDialog;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var BrandGrid = /** @class */ (function (_super) {
            __extends(BrandGrid, _super);
            function BrandGrid(container) {
                return _super.call(this, container) || this;
            }
            BrandGrid.prototype.getColumnsKey = function () { return Merchandise.BrandColumns.columnsKey; };
            BrandGrid.prototype.getDialogType = function () { return Merchandise.BrandDialog; };
            BrandGrid.prototype.getIdProperty = function () { return Merchandise.BrandRow.idProperty; };
            BrandGrid.prototype.getInsertPermission = function () { return Merchandise.BrandRow.insertPermission; };
            BrandGrid.prototype.getLocalTextPrefix = function () { return Merchandise.BrandRow.localTextPrefix; };
            BrandGrid.prototype.getService = function () { return Merchandise.BrandService.baseUrl; };
            BrandGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            BrandGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            BrandGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BrandGrid);
            return BrandGrid;
        }(Serenity.EntityGrid));
        Merchandise.BrandGrid = BrandGrid;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var CategoryDialog = /** @class */ (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Merchandise.CategoryForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Merchandise.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Merchandise.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Merchandise.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Merchandise.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Merchandise.CategoryService.baseUrl; };
            CategoryDialog.prototype.getDeletePermission = function () { return Merchandise.CategoryRow.deletePermission; };
            CategoryDialog.prototype.getInsertPermission = function () { return Merchandise.CategoryRow.insertPermission; };
            CategoryDialog.prototype.getUpdatePermission = function () { return Merchandise.CategoryRow.updatePermission; };
            CategoryDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CategoryDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Merchandise.CategoryDialog = CategoryDialog;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var CategoryGrid = /** @class */ (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return Merchandise.CategoryColumns.columnsKey; };
            CategoryGrid.prototype.getDialogType = function () { return Merchandise.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Merchandise.CategoryRow.idProperty; };
            CategoryGrid.prototype.getInsertPermission = function () { return Merchandise.CategoryRow.insertPermission; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Merchandise.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Merchandise.CategoryService.baseUrl; };
            CategoryGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            CategoryGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Merchandise.CategoryGrid = CategoryGrid;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var ColourDialog = /** @class */ (function (_super) {
            __extends(ColourDialog, _super);
            function ColourDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Merchandise.ColourForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            ColourDialog.prototype.getFormKey = function () { return Merchandise.ColourForm.formKey; };
            ColourDialog.prototype.getIdProperty = function () { return Merchandise.ColourRow.idProperty; };
            ColourDialog.prototype.getLocalTextPrefix = function () { return Merchandise.ColourRow.localTextPrefix; };
            ColourDialog.prototype.getNameProperty = function () { return Merchandise.ColourRow.nameProperty; };
            ColourDialog.prototype.getService = function () { return Merchandise.ColourService.baseUrl; };
            ColourDialog.prototype.getDeletePermission = function () { return Merchandise.ColourRow.deletePermission; };
            ColourDialog.prototype.getInsertPermission = function () { return Merchandise.ColourRow.insertPermission; };
            ColourDialog.prototype.getUpdatePermission = function () { return Merchandise.ColourRow.updatePermission; };
            ColourDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            ColourDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            ColourDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ColourDialog);
            return ColourDialog;
        }(Serenity.EntityDialog));
        Merchandise.ColourDialog = ColourDialog;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var ColourGrid = /** @class */ (function (_super) {
            __extends(ColourGrid, _super);
            function ColourGrid(container) {
                return _super.call(this, container) || this;
            }
            ColourGrid.prototype.getColumnsKey = function () { return Merchandise.ColourColumns.columnsKey; };
            ColourGrid.prototype.getDialogType = function () { return Merchandise.ColourDialog; };
            ColourGrid.prototype.getIdProperty = function () { return Merchandise.ColourRow.idProperty; };
            ColourGrid.prototype.getInsertPermission = function () { return Merchandise.ColourRow.insertPermission; };
            ColourGrid.prototype.getLocalTextPrefix = function () { return Merchandise.ColourRow.localTextPrefix; };
            ColourGrid.prototype.getService = function () { return Merchandise.ColourService.baseUrl; };
            ColourGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            ColourGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ColourGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ColourGrid);
            return ColourGrid;
        }(Serenity.EntityGrid));
        Merchandise.ColourGrid = ColourGrid;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var FlavourDialog = /** @class */ (function (_super) {
            __extends(FlavourDialog, _super);
            function FlavourDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Merchandise.FlavourForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            FlavourDialog.prototype.getFormKey = function () { return Merchandise.FlavourForm.formKey; };
            FlavourDialog.prototype.getIdProperty = function () { return Merchandise.FlavourRow.idProperty; };
            FlavourDialog.prototype.getLocalTextPrefix = function () { return Merchandise.FlavourRow.localTextPrefix; };
            FlavourDialog.prototype.getNameProperty = function () { return Merchandise.FlavourRow.nameProperty; };
            FlavourDialog.prototype.getService = function () { return Merchandise.FlavourService.baseUrl; };
            FlavourDialog.prototype.getDeletePermission = function () { return Merchandise.FlavourRow.deletePermission; };
            FlavourDialog.prototype.getInsertPermission = function () { return Merchandise.FlavourRow.insertPermission; };
            FlavourDialog.prototype.getUpdatePermission = function () { return Merchandise.FlavourRow.updatePermission; };
            FlavourDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            FlavourDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            FlavourDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FlavourDialog);
            return FlavourDialog;
        }(Serenity.EntityDialog));
        Merchandise.FlavourDialog = FlavourDialog;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var FlavourGrid = /** @class */ (function (_super) {
            __extends(FlavourGrid, _super);
            function FlavourGrid(container) {
                return _super.call(this, container) || this;
            }
            FlavourGrid.prototype.getColumnsKey = function () { return Merchandise.FlavourColumns.columnsKey; };
            FlavourGrid.prototype.getDialogType = function () { return Merchandise.FlavourDialog; };
            FlavourGrid.prototype.getIdProperty = function () { return Merchandise.FlavourRow.idProperty; };
            FlavourGrid.prototype.getInsertPermission = function () { return Merchandise.FlavourRow.insertPermission; };
            FlavourGrid.prototype.getLocalTextPrefix = function () { return Merchandise.FlavourRow.localTextPrefix; };
            FlavourGrid.prototype.getService = function () { return Merchandise.FlavourService.baseUrl; };
            FlavourGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            FlavourGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            FlavourGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FlavourGrid);
            return FlavourGrid;
        }(Serenity.EntityGrid));
        Merchandise.FlavourGrid = FlavourGrid;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var ProductDialog = /** @class */ (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Merchandise.ProductForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Merchandise.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Merchandise.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Merchandise.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Merchandise.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Merchandise.ProductService.baseUrl; };
            ProductDialog.prototype.getDeletePermission = function () { return Merchandise.ProductRow.deletePermission; };
            ProductDialog.prototype.getInsertPermission = function () { return Merchandise.ProductRow.insertPermission; };
            ProductDialog.prototype.getUpdatePermission = function () { return Merchandise.ProductRow.updatePermission; };
            ProductDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            ProductDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            ProductDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                    title: 'Print Brochure',
                    cssClass: 'export-pdf-button print-brochure',
                    reportKey: 'ProductPrint',
                    getParams: function () { return ({
                        Id: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            ProductDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    InvoiceKu.Merchandise.ProductService.Currency({}, function (response) {
                        _this.form.CurrencyName.value = response.Currency;
                    });
                }
            };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Merchandise.ProductDialog = ProductDialog;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var ProductGrid = /** @class */ (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return Merchandise.ProductColumns.columnsKey; };
            ProductGrid.prototype.getDialogType = function () { return Merchandise.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Merchandise.ProductRow.idProperty; };
            ProductGrid.prototype.getInsertPermission = function () { return Merchandise.ProductRow.insertPermission; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Merchandise.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Merchandise.ProductService.baseUrl; };
            ProductGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    id: 'Print Selected',
                    field: null,
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-selected" title="print-selected">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            ProductGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-selected')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'ProductPrint',
                            params: {
                                Id: item.Id
                            }
                        });
                    }
                }
            };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Merchandise.ProductGrid = ProductGrid;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var SizeDialog = /** @class */ (function (_super) {
            __extends(SizeDialog, _super);
            function SizeDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Merchandise.SizeForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            SizeDialog.prototype.getFormKey = function () { return Merchandise.SizeForm.formKey; };
            SizeDialog.prototype.getIdProperty = function () { return Merchandise.SizeRow.idProperty; };
            SizeDialog.prototype.getLocalTextPrefix = function () { return Merchandise.SizeRow.localTextPrefix; };
            SizeDialog.prototype.getNameProperty = function () { return Merchandise.SizeRow.nameProperty; };
            SizeDialog.prototype.getService = function () { return Merchandise.SizeService.baseUrl; };
            SizeDialog.prototype.getDeletePermission = function () { return Merchandise.SizeRow.deletePermission; };
            SizeDialog.prototype.getInsertPermission = function () { return Merchandise.SizeRow.insertPermission; };
            SizeDialog.prototype.getUpdatePermission = function () { return Merchandise.SizeRow.updatePermission; };
            SizeDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            SizeDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            SizeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SizeDialog);
            return SizeDialog;
        }(Serenity.EntityDialog));
        Merchandise.SizeDialog = SizeDialog;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var SizeGrid = /** @class */ (function (_super) {
            __extends(SizeGrid, _super);
            function SizeGrid(container) {
                return _super.call(this, container) || this;
            }
            SizeGrid.prototype.getColumnsKey = function () { return Merchandise.SizeColumns.columnsKey; };
            SizeGrid.prototype.getDialogType = function () { return Merchandise.SizeDialog; };
            SizeGrid.prototype.getIdProperty = function () { return Merchandise.SizeRow.idProperty; };
            SizeGrid.prototype.getInsertPermission = function () { return Merchandise.SizeRow.insertPermission; };
            SizeGrid.prototype.getLocalTextPrefix = function () { return Merchandise.SizeRow.localTextPrefix; };
            SizeGrid.prototype.getService = function () { return Merchandise.SizeService.baseUrl; };
            SizeGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            SizeGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            SizeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SizeGrid);
            return SizeGrid;
        }(Serenity.EntityGrid));
        Merchandise.SizeGrid = SizeGrid;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var UomDialog = /** @class */ (function (_super) {
            __extends(UomDialog, _super);
            function UomDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Merchandise.UomForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            UomDialog.prototype.getFormKey = function () { return Merchandise.UomForm.formKey; };
            UomDialog.prototype.getIdProperty = function () { return Merchandise.UomRow.idProperty; };
            UomDialog.prototype.getLocalTextPrefix = function () { return Merchandise.UomRow.localTextPrefix; };
            UomDialog.prototype.getNameProperty = function () { return Merchandise.UomRow.nameProperty; };
            UomDialog.prototype.getService = function () { return Merchandise.UomService.baseUrl; };
            UomDialog.prototype.getDeletePermission = function () { return Merchandise.UomRow.deletePermission; };
            UomDialog.prototype.getInsertPermission = function () { return Merchandise.UomRow.insertPermission; };
            UomDialog.prototype.getUpdatePermission = function () { return Merchandise.UomRow.updatePermission; };
            UomDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            UomDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            UomDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UomDialog);
            return UomDialog;
        }(Serenity.EntityDialog));
        Merchandise.UomDialog = UomDialog;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Merchandise;
    (function (Merchandise) {
        var UomGrid = /** @class */ (function (_super) {
            __extends(UomGrid, _super);
            function UomGrid(container) {
                return _super.call(this, container) || this;
            }
            UomGrid.prototype.getColumnsKey = function () { return Merchandise.UomColumns.columnsKey; };
            UomGrid.prototype.getDialogType = function () { return Merchandise.UomDialog; };
            UomGrid.prototype.getIdProperty = function () { return Merchandise.UomRow.idProperty; };
            UomGrid.prototype.getInsertPermission = function () { return Merchandise.UomRow.insertPermission; };
            UomGrid.prototype.getLocalTextPrefix = function () { return Merchandise.UomRow.localTextPrefix; };
            UomGrid.prototype.getService = function () { return Merchandise.UomService.baseUrl; };
            UomGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            UomGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            UomGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UomGrid);
            return UomGrid;
        }(Serenity.EntityGrid));
        Merchandise.UomGrid = UomGrid;
    })(Merchandise = InvoiceKu.Merchandise || (InvoiceKu.Merchandise = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillDialog = /** @class */ (function (_super) {
            __extends(BillDialog, _super);
            function BillDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Purchase.BillForm(_this.idPrefix);
                _this.form.ItemList.element.css('height', '300px');
                _this.form.ItemList.view.onRowCountChanged.subscribe(function () {
                    _this.recalculate();
                });
                _this.form.ItemList.view.onDataChanged.subscribe(function () {
                    _this.recalculate();
                });
                _this.form.OtherCharge.change(function () {
                    _this.recalculate();
                });
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                _this.form.PurchaseOrderId.changeSelect2(function (args) {
                    var purchaseOrderId = _this.form.PurchaseOrderId.value;
                    if (Q.isEmptyOrNull(purchaseOrderId)) {
                        _this.setVendor({});
                        return;
                    }
                    Purchase.PurchaseOrderService.Retrieve({
                        EntityId: purchaseOrderId
                    }, function (response) {
                        _this.form.OtherCharge.value = response.Entity.OtherCharge;
                        var request = [];
                        Purchase.PurchaseOrderDetailService.List({
                            Criteria: Serenity.Criteria.and(request.Criteria, [['PurchaseOrderId'], '=', purchaseOrderId])
                        }, function (response) {
                            var items = [];
                            for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                                var item = _a[_i];
                                items.push({
                                    ProductId: item.ProductId,
                                    ProductName: item.ProductName,
                                    Price: item.Price,
                                    Qty: item.Qty,
                                    SubTotal: item.SubTotal,
                                    Discount: item.Discount,
                                    BeforeTax: item.BeforeTax,
                                    TaxPercentage: item.TaxPercentage,
                                    TaxAmount: item.TaxAmount,
                                    Total: item.Total
                                });
                            }
                            _this.form.ItemList.value = items;
                        });
                        Purchase.VendorService.Retrieve({
                            EntityId: response.Entity.VendorId
                        }, function (response) {
                            _this.setVendor(response.Entity);
                        });
                    });
                });
                return _this;
            }
            BillDialog.prototype.getFormKey = function () { return Purchase.BillForm.formKey; };
            BillDialog.prototype.getIdProperty = function () { return Purchase.BillRow.idProperty; };
            BillDialog.prototype.getLocalTextPrefix = function () { return Purchase.BillRow.localTextPrefix; };
            BillDialog.prototype.getNameProperty = function () { return Purchase.BillRow.nameProperty; };
            BillDialog.prototype.getService = function () { return Purchase.BillService.baseUrl; };
            BillDialog.prototype.getDeletePermission = function () { return Purchase.BillRow.deletePermission; };
            BillDialog.prototype.getInsertPermission = function () { return Purchase.BillRow.insertPermission; };
            BillDialog.prototype.getUpdatePermission = function () { return Purchase.BillRow.updatePermission; };
            BillDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            BillDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            BillDialog.prototype.recalculate = function () {
                this.form.SubTotal.value = 0;
                this.form.BeforeTax.value = 0;
                this.form.Discount.value = 0;
                this.form.TaxAmount.value = 0;
                this.form.Total.value = 0;
                for (var _i = 0, _a = this.form.ItemList.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.form.SubTotal.value += item.SubTotal;
                    this.form.Discount.value += item.Discount;
                    this.form.BeforeTax.value += item.BeforeTax;
                    this.form.TaxAmount.value += item.TaxAmount;
                    this.form.Total.value += item.Total;
                }
                this.form.Total.value += this.form.OtherCharge.value;
            };
            BillDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    InvoiceKu.Purchase.BillService.Currency({}, function (response) {
                        _this.form.CurrencyName.value = response.Currency;
                    });
                }
            };
            BillDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('print-bill').toggle(this.isEditMode());
            };
            BillDialog.prototype.setVendor = function (vendor) {
                this.form.VendorName.value = vendor.Name;
                this.form.VendorStreet.value = vendor.Street;
                this.form.VendorCity.value = vendor.City;
                this.form.VendorState.value = vendor.State;
                this.form.VendorZipCode.value = vendor.ZipCode;
                this.form.VendorPhone.value = vendor.Phone;
                this.form.VendorEmail.value = vendor.Email;
            };
            BillDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                    title: 'Print Bill',
                    cssClass: 'export-pdf-button print-bill',
                    reportKey: 'BillPrint',
                    getParams: function () { return ({
                        Id: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            BillDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], BillDialog);
            return BillDialog;
        }(Serenity.EntityDialog));
        Purchase.BillDialog = BillDialog;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillEditor = /** @class */ (function (_super) {
            __extends(BillEditor, _super);
            function BillEditor(container) {
                return _super.call(this, container) || this;
            }
            BillEditor.prototype.getColumnsKey = function () { return Purchase.BillColumns.columnsKey; };
            BillEditor.prototype.getDialogType = function () { return Purchase.BillDialog; };
            BillEditor.prototype.getLocalTextPrefix = function () { return Purchase.BillRow.localTextPrefix; };
            BillEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            BillEditor.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                var addButton = this.toolbar.findButton('add-button');
                addButton.toggleClass('hide', true);
            };
            BillEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], BillEditor);
            return BillEditor;
        }(Serenity.Extensions.GridEditorBase));
        Purchase.BillEditor = BillEditor;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillGrid = /** @class */ (function (_super) {
            __extends(BillGrid, _super);
            function BillGrid(container) {
                return _super.call(this, container) || this;
            }
            BillGrid.prototype.getColumnsKey = function () { return Purchase.BillColumns.columnsKey; };
            BillGrid.prototype.getDialogType = function () { return Purchase.BillDialog; };
            BillGrid.prototype.getIdProperty = function () { return Purchase.BillRow.idProperty; };
            BillGrid.prototype.getInsertPermission = function () { return Purchase.BillRow.insertPermission; };
            BillGrid.prototype.getLocalTextPrefix = function () { return Purchase.BillRow.localTextPrefix; };
            BillGrid.prototype.getService = function () { return Purchase.BillService.baseUrl; };
            BillGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            BillGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    id: 'Print Selected',
                    field: null,
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-selected" title="print-selected">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            BillGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-selected')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'BillPrint',
                            params: {
                                Id: item.Id
                            }
                        });
                    }
                }
            };
            BillGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BillGrid);
            return BillGrid;
        }(Serenity.EntityGrid));
        Purchase.BillGrid = BillGrid;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillDetailDialog = /** @class */ (function (_super) {
            __extends(BillDetailDialog, _super);
            function BillDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Purchase.BillDetailForm(_this.idPrefix);
                _this.form.Price.change(function () {
                    _this.recalculate();
                });
                _this.form.Qty.change(function () {
                    _this.recalculate();
                });
                _this.form.Discount.change(function () {
                    _this.recalculate();
                });
                _this.form.TaxPercentage.change(function () {
                    _this.recalculate();
                });
                _this.form.ProductId.changeSelect2(function (args) {
                    var productId = _this.form.ProductId.value;
                    if (Q.isEmptyOrNull(productId)) {
                        return;
                    }
                    InvoiceKu.Merchandise.ProductService.Retrieve({
                        EntityId: productId
                    }, function (response) {
                        _this.form.Price.value = response.Entity.PurchasePrice;
                        InvoiceKu.Settings.PurchaseTaxService.Retrieve({
                            EntityId: response.Entity.PurchaseTaxId
                        }, function (response) {
                            _this.form.TaxPercentage.value = response.Entity.TaxRatePercentage;
                            _this.recalculate();
                        });
                    });
                });
                return _this;
            }
            BillDetailDialog.prototype.getFormKey = function () { return Purchase.BillDetailForm.formKey; };
            BillDetailDialog.prototype.getLocalTextPrefix = function () { return Purchase.BillDetailRow.localTextPrefix; };
            BillDetailDialog.prototype.recalculate = function () {
                this.form.SubTotal.value = this.form.Price.value * this.form.Qty.value;
                this.form.BeforeTax.value = this.form.SubTotal.value - this.form.Discount.value;
                this.form.TaxAmount.value = (this.form.TaxPercentage.value * this.form.BeforeTax.value) / 100;
                this.form.Total.value = this.form.BeforeTax.value + this.form.TaxAmount.value;
            };
            BillDetailDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.SubTotal.element.attr('readonly', 'readonly');
                this.form.SubTotal.element.addClass('readonly');
                this.form.BeforeTax.element.attr('readonly', 'readonly');
                this.form.BeforeTax.element.addClass('readonly');
                this.form.TaxAmount.element.attr('readonly', 'readonly');
                this.form.TaxAmount.element.addClass('readonly');
                this.form.Total.element.attr('readonly', 'readonly');
                this.form.Total.element.addClass('readonly');
            };
            BillDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BillDetailDialog);
            return BillDetailDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Purchase.BillDetailDialog = BillDetailDialog;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillDetailEditor = /** @class */ (function (_super) {
            __extends(BillDetailEditor, _super);
            function BillDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            BillDetailEditor.prototype.getColumnsKey = function () { return Purchase.BillDetailColumns.columnsKey; };
            BillDetailEditor.prototype.getDialogType = function () { return Purchase.BillDetailDialog; };
            BillDetailEditor.prototype.getLocalTextPrefix = function () { return Purchase.BillDetailRow.localTextPrefix; };
            BillDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.ProductName = InvoiceKu.Merchandise.ProductRow.getLookup()
                    .itemById[row.ProductId].Name;
                return true;
            };
            BillDetailEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], BillDetailEditor);
            return BillDetailEditor;
        }(Serenity.Extensions.GridEditorBase));
        Purchase.BillDetailEditor = BillDetailEditor;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillDetailGrid = /** @class */ (function (_super) {
            __extends(BillDetailGrid, _super);
            function BillDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            BillDetailGrid.prototype.getColumnsKey = function () { return Purchase.BillDetailColumns.columnsKey; };
            BillDetailGrid.prototype.getDialogType = function () { return Purchase.BillDetailDialog; };
            BillDetailGrid.prototype.getIdProperty = function () { return Purchase.BillDetailRow.idProperty; };
            BillDetailGrid.prototype.getInsertPermission = function () { return Purchase.BillDetailRow.insertPermission; };
            BillDetailGrid.prototype.getLocalTextPrefix = function () { return Purchase.BillDetailRow.localTextPrefix; };
            BillDetailGrid.prototype.getService = function () { return Purchase.BillDetailService.baseUrl; };
            BillDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BillDetailGrid);
            return BillDetailGrid;
        }(Serenity.EntityGrid));
        Purchase.BillDetailGrid = BillDetailGrid;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillPaymentDialog = /** @class */ (function (_super) {
            __extends(BillPaymentDialog, _super);
            function BillPaymentDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Purchase.BillPaymentForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                _this.form.BillId.changeSelect2(function (args) {
                    var billId = _this.form.BillId.value;
                    if (Q.isEmptyOrNull(billId)) {
                        _this.setVendor({});
                        return;
                    }
                    Purchase.BillService.Retrieve({
                        EntityId: billId
                    }, function (response) {
                        _this.form.BillAmount.value = response.Entity.Total;
                        _this.form.PaymentAmount.value = _this.form.BillAmount.value;
                        Purchase.PurchaseOrderService.Retrieve({
                            EntityId: response.Entity.PurchaseOrderId
                        }, function (response) {
                            Purchase.VendorService.Retrieve({
                                EntityId: response.Entity.VendorId
                            }, function (response) {
                                _this.setVendor(response.Entity);
                            });
                        });
                    });
                });
                return _this;
            }
            BillPaymentDialog.prototype.getFormKey = function () { return Purchase.BillPaymentForm.formKey; };
            BillPaymentDialog.prototype.getIdProperty = function () { return Purchase.BillPaymentRow.idProperty; };
            BillPaymentDialog.prototype.getLocalTextPrefix = function () { return Purchase.BillPaymentRow.localTextPrefix; };
            BillPaymentDialog.prototype.getNameProperty = function () { return Purchase.BillPaymentRow.nameProperty; };
            BillPaymentDialog.prototype.getService = function () { return Purchase.BillPaymentService.baseUrl; };
            BillPaymentDialog.prototype.getDeletePermission = function () { return Purchase.BillPaymentRow.deletePermission; };
            BillPaymentDialog.prototype.getInsertPermission = function () { return Purchase.BillPaymentRow.insertPermission; };
            BillPaymentDialog.prototype.getUpdatePermission = function () { return Purchase.BillPaymentRow.updatePermission; };
            BillPaymentDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            BillPaymentDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            BillPaymentDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.BillAmount.element.attr('readonly', 'readonly');
                this.form.BillAmount.element.addClass('readonly');
                this.toolbar.findButton('print-payment').toggle(this.isEditMode());
            };
            BillPaymentDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    InvoiceKu.Purchase.BillPaymentService.Currency({}, function (response) {
                        _this.form.CurrencyName.value = response.Currency;
                    });
                }
            };
            BillPaymentDialog.prototype.setVendor = function (vendor) {
                this.form.VendorName.value = vendor.Name;
                this.form.VendorStreet.value = vendor.Street;
                this.form.VendorCity.value = vendor.City;
                this.form.VendorState.value = vendor.State;
                this.form.VendorZipCode.value = vendor.ZipCode;
                this.form.VendorPhone.value = vendor.Phone;
                this.form.VendorEmail.value = vendor.Email;
            };
            BillPaymentDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                    title: 'Print Payment Voucher',
                    cssClass: 'export-pdf-button print-payment',
                    reportKey: 'BillPaymentPrint',
                    getParams: function () { return ({
                        Id: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            BillPaymentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BillPaymentDialog);
            return BillPaymentDialog;
        }(Serenity.EntityDialog));
        Purchase.BillPaymentDialog = BillPaymentDialog;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillPaymentEditor = /** @class */ (function (_super) {
            __extends(BillPaymentEditor, _super);
            function BillPaymentEditor(container) {
                return _super.call(this, container) || this;
            }
            BillPaymentEditor.prototype.getColumnsKey = function () { return Purchase.BillPaymentColumns.columnsKey; };
            BillPaymentEditor.prototype.getDialogType = function () { return Purchase.BillPaymentDialog; };
            BillPaymentEditor.prototype.getLocalTextPrefix = function () { return Purchase.BillPaymentRow.localTextPrefix; };
            BillPaymentEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            BillPaymentEditor.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                var addButton = this.toolbar.findButton('add-button');
                addButton.toggleClass('hide', true);
            };
            BillPaymentEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], BillPaymentEditor);
            return BillPaymentEditor;
        }(Serenity.Extensions.GridEditorBase));
        Purchase.BillPaymentEditor = BillPaymentEditor;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var BillPaymentGrid = /** @class */ (function (_super) {
            __extends(BillPaymentGrid, _super);
            function BillPaymentGrid(container) {
                return _super.call(this, container) || this;
            }
            BillPaymentGrid.prototype.getColumnsKey = function () { return Purchase.BillPaymentColumns.columnsKey; };
            BillPaymentGrid.prototype.getDialogType = function () { return Purchase.BillPaymentDialog; };
            BillPaymentGrid.prototype.getIdProperty = function () { return Purchase.BillPaymentRow.idProperty; };
            BillPaymentGrid.prototype.getInsertPermission = function () { return Purchase.BillPaymentRow.insertPermission; };
            BillPaymentGrid.prototype.getLocalTextPrefix = function () { return Purchase.BillPaymentRow.localTextPrefix; };
            BillPaymentGrid.prototype.getService = function () { return Purchase.BillPaymentService.baseUrl; };
            BillPaymentGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            BillPaymentGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    id: 'Print Selected',
                    field: null,
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-selected" title="print-selected">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            BillPaymentGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-selected')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'BillPaymentPrint',
                            params: {
                                Id: item.Id
                            }
                        });
                    }
                }
            };
            BillPaymentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BillPaymentGrid);
            return BillPaymentGrid;
        }(Serenity.EntityGrid));
        Purchase.BillPaymentGrid = BillPaymentGrid;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDialog = /** @class */ (function (_super) {
            __extends(PurchaseOrderDialog, _super);
            function PurchaseOrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Purchase.PurchaseOrderForm(_this.idPrefix);
                _this.form.ItemList.element.css('height', '300px');
                _this.form.ItemList.view.onRowCountChanged.subscribe(function () {
                    _this.recalculate();
                });
                _this.form.ItemList.view.onDataChanged.subscribe(function () {
                    _this.recalculate();
                });
                _this.form.OtherCharge.change(function () {
                    _this.recalculate();
                });
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                _this.form.VendorId.changeSelect2(function (args) {
                    var vendorId = _this.form.VendorId.value;
                    if (Q.isEmptyOrNull(vendorId)) {
                        _this.setVendor({});
                        return;
                    }
                    Purchase.VendorService.Retrieve({
                        EntityId: vendorId
                    }, function (response) {
                        _this.setVendor(response.Entity);
                    });
                });
                return _this;
            }
            PurchaseOrderDialog.prototype.getFormKey = function () { return Purchase.PurchaseOrderForm.formKey; };
            PurchaseOrderDialog.prototype.getIdProperty = function () { return Purchase.PurchaseOrderRow.idProperty; };
            PurchaseOrderDialog.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderDialog.prototype.getNameProperty = function () { return Purchase.PurchaseOrderRow.nameProperty; };
            PurchaseOrderDialog.prototype.getService = function () { return Purchase.PurchaseOrderService.baseUrl; };
            PurchaseOrderDialog.prototype.getDeletePermission = function () { return Purchase.PurchaseOrderRow.deletePermission; };
            PurchaseOrderDialog.prototype.getInsertPermission = function () { return Purchase.PurchaseOrderRow.insertPermission; };
            PurchaseOrderDialog.prototype.getUpdatePermission = function () { return Purchase.PurchaseOrderRow.updatePermission; };
            PurchaseOrderDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            PurchaseOrderDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            PurchaseOrderDialog.prototype.recalculate = function () {
                this.form.SubTotal.value = 0;
                this.form.BeforeTax.value = 0;
                this.form.Discount.value = 0;
                this.form.TaxAmount.value = 0;
                this.form.Total.value = 0;
                for (var _i = 0, _a = this.form.ItemList.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.form.SubTotal.value += item.SubTotal;
                    this.form.Discount.value += item.Discount;
                    this.form.BeforeTax.value += item.BeforeTax;
                    this.form.TaxAmount.value += item.TaxAmount;
                    this.form.Total.value += item.Total;
                }
                this.form.Total.value += this.form.OtherCharge.value;
            };
            PurchaseOrderDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    InvoiceKu.Purchase.PurchaseOrderService.Currency({}, function (response) {
                        _this.form.CurrencyName.value = response.Currency;
                    });
                }
            };
            PurchaseOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('print-po').toggle(this.isEditMode());
            };
            PurchaseOrderDialog.prototype.setVendor = function (vendor) {
                this.form.VendorName.value = vendor.Name;
                this.form.VendorStreet.value = vendor.Street;
                this.form.VendorCity.value = vendor.City;
                this.form.VendorState.value = vendor.State;
                this.form.VendorZipCode.value = vendor.ZipCode;
                this.form.VendorPhone.value = vendor.Phone;
                this.form.VendorEmail.value = vendor.Email;
            };
            PurchaseOrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                    title: 'Print PO',
                    cssClass: 'export-pdf-button print-po',
                    reportKey: 'PurchaseOrderPrint',
                    getParams: function () { return ({
                        Id: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            PurchaseOrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], PurchaseOrderDialog);
            return PurchaseOrderDialog;
        }(Serenity.EntityDialog));
        Purchase.PurchaseOrderDialog = PurchaseOrderDialog;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderGrid = /** @class */ (function (_super) {
            __extends(PurchaseOrderGrid, _super);
            function PurchaseOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseOrderGrid.prototype.getColumnsKey = function () { return Purchase.PurchaseOrderColumns.columnsKey; };
            PurchaseOrderGrid.prototype.getDialogType = function () { return Purchase.PurchaseOrderDialog; };
            PurchaseOrderGrid.prototype.getIdProperty = function () { return Purchase.PurchaseOrderRow.idProperty; };
            PurchaseOrderGrid.prototype.getInsertPermission = function () { return Purchase.PurchaseOrderRow.insertPermission; };
            PurchaseOrderGrid.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderGrid.prototype.getService = function () { return Purchase.PurchaseOrderService.baseUrl; };
            PurchaseOrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            PurchaseOrderGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    id: 'Print Selected',
                    field: null,
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-selected" title="print-selected">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            PurchaseOrderGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-selected')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'PurchaseOrderPrint',
                            params: {
                                Id: item.Id
                            }
                        });
                    }
                }
            };
            PurchaseOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderGrid);
            return PurchaseOrderGrid;
        }(Serenity.EntityGrid));
        Purchase.PurchaseOrderGrid = PurchaseOrderGrid;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailDialog = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailDialog, _super);
            function PurchaseOrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Purchase.PurchaseOrderDetailForm(_this.idPrefix);
                _this.form.Price.change(function () {
                    _this.recalculate();
                });
                _this.form.Qty.change(function () {
                    _this.recalculate();
                });
                _this.form.Discount.change(function () {
                    _this.recalculate();
                });
                _this.form.TaxPercentage.change(function () {
                    _this.recalculate();
                });
                _this.form.ProductId.changeSelect2(function (args) {
                    var productId = _this.form.ProductId.value;
                    if (Q.isEmptyOrNull(productId)) {
                        return;
                    }
                    InvoiceKu.Merchandise.ProductService.Retrieve({
                        EntityId: productId
                    }, function (response) {
                        _this.form.Price.value = response.Entity.PurchasePrice;
                        InvoiceKu.Settings.PurchaseTaxService.Retrieve({
                            EntityId: response.Entity.PurchaseTaxId
                        }, function (response) {
                            _this.form.TaxPercentage.value = response.Entity.TaxRatePercentage;
                            _this.recalculate();
                        });
                    });
                });
                return _this;
            }
            PurchaseOrderDetailDialog.prototype.getFormKey = function () { return Purchase.PurchaseOrderDetailForm.formKey; };
            PurchaseOrderDetailDialog.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseOrderDetailRow.localTextPrefix; };
            PurchaseOrderDetailDialog.prototype.recalculate = function () {
                this.form.SubTotal.value = this.form.Price.value * this.form.Qty.value;
                this.form.BeforeTax.value = this.form.SubTotal.value - this.form.Discount.value;
                this.form.TaxAmount.value = (this.form.TaxPercentage.value * this.form.BeforeTax.value) / 100;
                this.form.Total.value = this.form.BeforeTax.value + this.form.TaxAmount.value;
            };
            PurchaseOrderDetailDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.SubTotal.element.attr('readonly', 'readonly');
                this.form.SubTotal.element.addClass('readonly');
                this.form.BeforeTax.element.attr('readonly', 'readonly');
                this.form.BeforeTax.element.addClass('readonly');
                this.form.TaxAmount.element.attr('readonly', 'readonly');
                this.form.TaxAmount.element.addClass('readonly');
                this.form.Total.element.attr('readonly', 'readonly');
                this.form.Total.element.addClass('readonly');
            };
            PurchaseOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDetailDialog);
            return PurchaseOrderDetailDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Purchase.PurchaseOrderDetailDialog = PurchaseOrderDetailDialog;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailEditor = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailEditor, _super);
            function PurchaseOrderDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            PurchaseOrderDetailEditor.prototype.getColumnsKey = function () { return Purchase.PurchaseOrderDetailColumns.columnsKey; };
            PurchaseOrderDetailEditor.prototype.getDialogType = function () { return Purchase.PurchaseOrderDetailDialog; };
            PurchaseOrderDetailEditor.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseOrderDetailRow.localTextPrefix; };
            PurchaseOrderDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.ProductName = InvoiceKu.Merchandise.ProductRow.getLookup()
                    .itemById[row.ProductId].Name;
                return true;
            };
            PurchaseOrderDetailEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDetailEditor);
            return PurchaseOrderDetailEditor;
        }(Serenity.Extensions.GridEditorBase));
        Purchase.PurchaseOrderDetailEditor = PurchaseOrderDetailEditor;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailGrid = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailGrid, _super);
            function PurchaseOrderDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseOrderDetailGrid.prototype.getColumnsKey = function () { return Purchase.PurchaseOrderDetailColumns.columnsKey; };
            PurchaseOrderDetailGrid.prototype.getDialogType = function () { return Purchase.PurchaseOrderDetailDialog; };
            PurchaseOrderDetailGrid.prototype.getIdProperty = function () { return Purchase.PurchaseOrderDetailRow.idProperty; };
            PurchaseOrderDetailGrid.prototype.getInsertPermission = function () { return Purchase.PurchaseOrderDetailRow.insertPermission; };
            PurchaseOrderDetailGrid.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseOrderDetailRow.localTextPrefix; };
            PurchaseOrderDetailGrid.prototype.getService = function () { return Purchase.PurchaseOrderDetailService.baseUrl; };
            PurchaseOrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDetailGrid);
            return PurchaseOrderDetailGrid;
        }(Serenity.EntityGrid));
        Purchase.PurchaseOrderDetailGrid = PurchaseOrderDetailGrid;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var VendorDialog = /** @class */ (function (_super) {
            __extends(VendorDialog, _super);
            function VendorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Purchase.VendorForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            VendorDialog.prototype.getFormKey = function () { return Purchase.VendorForm.formKey; };
            VendorDialog.prototype.getIdProperty = function () { return Purchase.VendorRow.idProperty; };
            VendorDialog.prototype.getLocalTextPrefix = function () { return Purchase.VendorRow.localTextPrefix; };
            VendorDialog.prototype.getNameProperty = function () { return Purchase.VendorRow.nameProperty; };
            VendorDialog.prototype.getService = function () { return Purchase.VendorService.baseUrl; };
            VendorDialog.prototype.getDeletePermission = function () { return Purchase.VendorRow.deletePermission; };
            VendorDialog.prototype.getInsertPermission = function () { return Purchase.VendorRow.insertPermission; };
            VendorDialog.prototype.getUpdatePermission = function () { return Purchase.VendorRow.updatePermission; };
            VendorDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            VendorDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            VendorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VendorDialog);
            return VendorDialog;
        }(Serenity.EntityDialog));
        Purchase.VendorDialog = VendorDialog;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var VendorGrid = /** @class */ (function (_super) {
            __extends(VendorGrid, _super);
            function VendorGrid(container) {
                return _super.call(this, container) || this;
            }
            VendorGrid.prototype.getColumnsKey = function () { return Purchase.VendorColumns.columnsKey; };
            VendorGrid.prototype.getDialogType = function () { return Purchase.VendorDialog; };
            VendorGrid.prototype.getIdProperty = function () { return Purchase.VendorRow.idProperty; };
            VendorGrid.prototype.getInsertPermission = function () { return Purchase.VendorRow.insertPermission; };
            VendorGrid.prototype.getLocalTextPrefix = function () { return Purchase.VendorRow.localTextPrefix; };
            VendorGrid.prototype.getService = function () { return Purchase.VendorService.baseUrl; };
            VendorGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            VendorGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            VendorGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VendorGrid);
            return VendorGrid;
        }(Serenity.EntityGrid));
        Purchase.VendorGrid = VendorGrid;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var VendorContactDialog = /** @class */ (function (_super) {
            __extends(VendorContactDialog, _super);
            function VendorContactDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Purchase.VendorContactForm(_this.idPrefix);
                return _this;
            }
            VendorContactDialog.prototype.getFormKey = function () { return Purchase.VendorContactForm.formKey; };
            VendorContactDialog.prototype.getLocalTextPrefix = function () { return Purchase.VendorContactRow.localTextPrefix; };
            VendorContactDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VendorContactDialog);
            return VendorContactDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Purchase.VendorContactDialog = VendorContactDialog;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var VendorContactEditor = /** @class */ (function (_super) {
            __extends(VendorContactEditor, _super);
            function VendorContactEditor(container) {
                return _super.call(this, container) || this;
            }
            VendorContactEditor.prototype.getColumnsKey = function () { return Purchase.VendorContactColumns.columnsKey; };
            VendorContactEditor.prototype.getDialogType = function () { return Purchase.VendorContactDialog; };
            VendorContactEditor.prototype.getLocalTextPrefix = function () { return Purchase.VendorContactRow.localTextPrefix; };
            VendorContactEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            VendorContactEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], VendorContactEditor);
            return VendorContactEditor;
        }(Serenity.Extensions.GridEditorBase));
        Purchase.VendorContactEditor = VendorContactEditor;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Purchase;
    (function (Purchase) {
        var VendorContactGrid = /** @class */ (function (_super) {
            __extends(VendorContactGrid, _super);
            function VendorContactGrid(container) {
                return _super.call(this, container) || this;
            }
            VendorContactGrid.prototype.getColumnsKey = function () { return Purchase.VendorContactColumns.columnsKey; };
            VendorContactGrid.prototype.getDialogType = function () { return Purchase.VendorContactDialog; };
            VendorContactGrid.prototype.getIdProperty = function () { return Purchase.VendorContactRow.idProperty; };
            VendorContactGrid.prototype.getInsertPermission = function () { return Purchase.VendorContactRow.insertPermission; };
            VendorContactGrid.prototype.getLocalTextPrefix = function () { return Purchase.VendorContactRow.localTextPrefix; };
            VendorContactGrid.prototype.getService = function () { return Purchase.VendorContactService.baseUrl; };
            VendorContactGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            VendorContactGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VendorContactGrid);
            return VendorContactGrid;
        }(Serenity.EntityGrid));
        Purchase.VendorContactGrid = VendorContactGrid;
    })(Purchase = InvoiceKu.Purchase || (InvoiceKu.Purchase = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Sales.CustomerForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Sales.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Sales.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Sales.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Sales.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Sales.CustomerService.baseUrl; };
            CustomerDialog.prototype.getDeletePermission = function () { return Sales.CustomerRow.deletePermission; };
            CustomerDialog.prototype.getInsertPermission = function () { return Sales.CustomerRow.insertPermission; };
            CustomerDialog.prototype.getUpdatePermission = function () { return Sales.CustomerRow.updatePermission; };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Sales.CustomerDialog = CustomerDialog;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return Sales.CustomerColumns.columnsKey; };
            CustomerGrid.prototype.getDialogType = function () { return Sales.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Sales.CustomerRow.idProperty; };
            CustomerGrid.prototype.getInsertPermission = function () { return Sales.CustomerRow.insertPermission; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Sales.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Sales.CustomerService.baseUrl; };
            CustomerGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Sales.CustomerGrid = CustomerGrid;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var CustomerContactDialog = /** @class */ (function (_super) {
            __extends(CustomerContactDialog, _super);
            function CustomerContactDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.CustomerContactForm(_this.idPrefix);
                return _this;
            }
            CustomerContactDialog.prototype.getFormKey = function () { return Sales.CustomerContactForm.formKey; };
            CustomerContactDialog.prototype.getLocalTextPrefix = function () { return Sales.CustomerContactRow.localTextPrefix; };
            CustomerContactDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerContactDialog);
            return CustomerContactDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Sales.CustomerContactDialog = CustomerContactDialog;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var CustomerContactEditor = /** @class */ (function (_super) {
            __extends(CustomerContactEditor, _super);
            function CustomerContactEditor(container) {
                return _super.call(this, container) || this;
            }
            CustomerContactEditor.prototype.getColumnsKey = function () { return Sales.CustomerContactColumns.columnsKey; };
            CustomerContactEditor.prototype.getDialogType = function () { return Sales.CustomerContactDialog; };
            CustomerContactEditor.prototype.getLocalTextPrefix = function () { return Sales.CustomerContactRow.localTextPrefix; };
            CustomerContactEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            CustomerContactEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerContactEditor);
            return CustomerContactEditor;
        }(Serenity.Extensions.GridEditorBase));
        Sales.CustomerContactEditor = CustomerContactEditor;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var CustomerContactGrid = /** @class */ (function (_super) {
            __extends(CustomerContactGrid, _super);
            function CustomerContactGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerContactGrid.prototype.getColumnsKey = function () { return Sales.CustomerContactColumns.columnsKey; };
            CustomerContactGrid.prototype.getDialogType = function () { return Sales.CustomerContactDialog; };
            CustomerContactGrid.prototype.getIdProperty = function () { return Sales.CustomerContactRow.idProperty; };
            CustomerContactGrid.prototype.getInsertPermission = function () { return Sales.CustomerContactRow.insertPermission; };
            CustomerContactGrid.prototype.getLocalTextPrefix = function () { return Sales.CustomerContactRow.localTextPrefix; };
            CustomerContactGrid.prototype.getService = function () { return Sales.CustomerContactService.baseUrl; };
            CustomerContactGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            CustomerContactGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerContactGrid);
            return CustomerContactGrid;
        }(Serenity.EntityGrid));
        Sales.CustomerContactGrid = CustomerContactGrid;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceDialog = /** @class */ (function (_super) {
            __extends(InvoiceDialog, _super);
            function InvoiceDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Sales.InvoiceForm(_this.idPrefix);
                _this.form.ItemList.element.css('height', '300px');
                _this.form.ItemList.view.onRowCountChanged.subscribe(function () {
                    _this.recalculate();
                });
                _this.form.ItemList.view.onDataChanged.subscribe(function () {
                    _this.recalculate();
                });
                _this.form.OtherCharge.change(function () {
                    _this.recalculate();
                });
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                _this.form.SalesOrderId.changeSelect2(function (args) {
                    var salesOrderId = _this.form.SalesOrderId.value;
                    if (Q.isEmptyOrNull(salesOrderId)) {
                        _this.setCustomer({});
                        return;
                    }
                    Sales.SalesOrderService.Retrieve({
                        EntityId: salesOrderId
                    }, function (response) {
                        _this.form.OtherCharge.value = response.Entity.OtherCharge;
                        var request = [];
                        Sales.SalesOrderDetailService.List({
                            Criteria: Serenity.Criteria.and(request.Criteria, [['SalesOrderId'], '=', salesOrderId])
                        }, function (response) {
                            var items = [];
                            for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                                var item = _a[_i];
                                items.push({
                                    ProductId: item.ProductId,
                                    ProductName: item.ProductName,
                                    Price: item.Price,
                                    Qty: item.Qty,
                                    SubTotal: item.SubTotal,
                                    Discount: item.Discount,
                                    BeforeTax: item.BeforeTax,
                                    TaxPercentage: item.TaxPercentage,
                                    TaxAmount: item.TaxAmount,
                                    Total: item.Total
                                });
                            }
                            _this.form.ItemList.value = items;
                        });
                        Sales.CustomerService.Retrieve({
                            EntityId: response.Entity.CustomerId
                        }, function (response) {
                            _this.setCustomer(response.Entity);
                        });
                    });
                });
                return _this;
            }
            InvoiceDialog.prototype.getFormKey = function () { return Sales.InvoiceForm.formKey; };
            InvoiceDialog.prototype.getIdProperty = function () { return Sales.InvoiceRow.idProperty; };
            InvoiceDialog.prototype.getLocalTextPrefix = function () { return Sales.InvoiceRow.localTextPrefix; };
            InvoiceDialog.prototype.getNameProperty = function () { return Sales.InvoiceRow.nameProperty; };
            InvoiceDialog.prototype.getService = function () { return Sales.InvoiceService.baseUrl; };
            InvoiceDialog.prototype.getDeletePermission = function () { return Sales.InvoiceRow.deletePermission; };
            InvoiceDialog.prototype.getInsertPermission = function () { return Sales.InvoiceRow.insertPermission; };
            InvoiceDialog.prototype.getUpdatePermission = function () { return Sales.InvoiceRow.updatePermission; };
            InvoiceDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            InvoiceDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            InvoiceDialog.prototype.recalculate = function () {
                this.form.SubTotal.value = 0;
                this.form.BeforeTax.value = 0;
                this.form.Discount.value = 0;
                this.form.TaxAmount.value = 0;
                this.form.Total.value = 0;
                for (var _i = 0, _a = this.form.ItemList.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.form.SubTotal.value += item.SubTotal;
                    this.form.Discount.value += item.Discount;
                    this.form.BeforeTax.value += item.BeforeTax;
                    this.form.TaxAmount.value += item.TaxAmount;
                    this.form.Total.value += item.Total;
                }
                this.form.Total.value += this.form.OtherCharge.value;
            };
            InvoiceDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    InvoiceKu.Sales.InvoiceService.Currency({}, function (response) {
                        _this.form.CurrencyName.value = response.Currency;
                    });
                }
            };
            InvoiceDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('print-invoice').toggle(this.isEditMode());
            };
            InvoiceDialog.prototype.setCustomer = function (vendor) {
                this.form.CustomerName.value = vendor.Name;
                this.form.CustomerStreet.value = vendor.Street;
                this.form.CustomerCity.value = vendor.City;
                this.form.CustomerState.value = vendor.State;
                this.form.CustomerZipCode.value = vendor.ZipCode;
                this.form.CustomerPhone.value = vendor.Phone;
                this.form.CustomerEmail.value = vendor.Email;
            };
            InvoiceDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                    title: 'Print Invoice',
                    cssClass: 'export-pdf-button print-invoice',
                    reportKey: 'InvoicePrint',
                    getParams: function () { return ({
                        Id: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            InvoiceDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], InvoiceDialog);
            return InvoiceDialog;
        }(Serenity.EntityDialog));
        Sales.InvoiceDialog = InvoiceDialog;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceEditor = /** @class */ (function (_super) {
            __extends(InvoiceEditor, _super);
            function InvoiceEditor(container) {
                return _super.call(this, container) || this;
            }
            InvoiceEditor.prototype.getColumnsKey = function () { return Sales.InvoiceColumns.columnsKey; };
            InvoiceEditor.prototype.getDialogType = function () { return Sales.InvoiceDialog; };
            InvoiceEditor.prototype.getLocalTextPrefix = function () { return Sales.InvoiceRow.localTextPrefix; };
            InvoiceEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            InvoiceEditor.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                var addButton = this.toolbar.findButton('add-button');
                addButton.toggleClass('hide', true);
            };
            InvoiceEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceEditor);
            return InvoiceEditor;
        }(Serenity.Extensions.GridEditorBase));
        Sales.InvoiceEditor = InvoiceEditor;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceGrid = /** @class */ (function (_super) {
            __extends(InvoiceGrid, _super);
            function InvoiceGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoiceGrid.prototype.getColumnsKey = function () { return Sales.InvoiceColumns.columnsKey; };
            InvoiceGrid.prototype.getDialogType = function () { return Sales.InvoiceDialog; };
            InvoiceGrid.prototype.getIdProperty = function () { return Sales.InvoiceRow.idProperty; };
            InvoiceGrid.prototype.getInsertPermission = function () { return Sales.InvoiceRow.insertPermission; };
            InvoiceGrid.prototype.getLocalTextPrefix = function () { return Sales.InvoiceRow.localTextPrefix; };
            InvoiceGrid.prototype.getService = function () { return Sales.InvoiceService.baseUrl; };
            InvoiceGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            InvoiceGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    id: 'Print Selected',
                    field: null,
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-selected" title="print-selected">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            InvoiceGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-selected')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'InvoicePrint',
                            params: {
                                Id: item.Id
                            }
                        });
                    }
                }
            };
            InvoiceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceGrid);
            return InvoiceGrid;
        }(Serenity.EntityGrid));
        Sales.InvoiceGrid = InvoiceGrid;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceDetailDialog = /** @class */ (function (_super) {
            __extends(InvoiceDetailDialog, _super);
            function InvoiceDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Sales.InvoiceDetailForm(_this.idPrefix);
                _this.form.Price.change(function () {
                    _this.recalculate();
                });
                _this.form.Qty.change(function () {
                    _this.recalculate();
                });
                _this.form.Discount.change(function () {
                    _this.recalculate();
                });
                _this.form.TaxPercentage.change(function () {
                    _this.recalculate();
                });
                _this.form.ProductId.changeSelect2(function (args) {
                    var productId = _this.form.ProductId.value;
                    if (Q.isEmptyOrNull(productId)) {
                        return;
                    }
                    InvoiceKu.Merchandise.ProductService.Retrieve({
                        EntityId: productId
                    }, function (response) {
                        _this.form.Price.value = response.Entity.PurchasePrice;
                        InvoiceKu.Settings.SalesTaxService.Retrieve({
                            EntityId: response.Entity.PurchaseTaxId
                        }, function (response) {
                            _this.form.TaxPercentage.value = response.Entity.TaxRatePercentage;
                            _this.recalculate();
                        });
                    });
                });
                return _this;
            }
            InvoiceDetailDialog.prototype.getFormKey = function () { return Sales.InvoiceDetailForm.formKey; };
            InvoiceDetailDialog.prototype.getLocalTextPrefix = function () { return Sales.InvoiceDetailRow.localTextPrefix; };
            InvoiceDetailDialog.prototype.recalculate = function () {
                this.form.SubTotal.value = this.form.Price.value * this.form.Qty.value;
                this.form.BeforeTax.value = this.form.SubTotal.value - this.form.Discount.value;
                this.form.TaxAmount.value = (this.form.TaxPercentage.value * this.form.BeforeTax.value) / 100;
                this.form.Total.value = this.form.BeforeTax.value + this.form.TaxAmount.value;
            };
            InvoiceDetailDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.SubTotal.element.attr('readonly', 'readonly');
                this.form.SubTotal.element.addClass('readonly');
                this.form.BeforeTax.element.attr('readonly', 'readonly');
                this.form.BeforeTax.element.addClass('readonly');
                this.form.TaxAmount.element.attr('readonly', 'readonly');
                this.form.TaxAmount.element.addClass('readonly');
                this.form.Total.element.attr('readonly', 'readonly');
                this.form.Total.element.addClass('readonly');
            };
            InvoiceDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceDetailDialog);
            return InvoiceDetailDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Sales.InvoiceDetailDialog = InvoiceDetailDialog;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceDetailEditor = /** @class */ (function (_super) {
            __extends(InvoiceDetailEditor, _super);
            function InvoiceDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            InvoiceDetailEditor.prototype.getColumnsKey = function () { return Sales.InvoiceDetailColumns.columnsKey; };
            InvoiceDetailEditor.prototype.getDialogType = function () { return Sales.InvoiceDetailDialog; };
            InvoiceDetailEditor.prototype.getLocalTextPrefix = function () { return Sales.InvoiceDetailRow.localTextPrefix; };
            InvoiceDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.ProductName = InvoiceKu.Merchandise.ProductRow.getLookup()
                    .itemById[row.ProductId].Name;
                return true;
            };
            InvoiceDetailEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceDetailEditor);
            return InvoiceDetailEditor;
        }(Serenity.Extensions.GridEditorBase));
        Sales.InvoiceDetailEditor = InvoiceDetailEditor;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoiceDetailGrid = /** @class */ (function (_super) {
            __extends(InvoiceDetailGrid, _super);
            function InvoiceDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoiceDetailGrid.prototype.getColumnsKey = function () { return Sales.InvoiceDetailColumns.columnsKey; };
            InvoiceDetailGrid.prototype.getDialogType = function () { return Sales.InvoiceDetailDialog; };
            InvoiceDetailGrid.prototype.getIdProperty = function () { return Sales.InvoiceDetailRow.idProperty; };
            InvoiceDetailGrid.prototype.getInsertPermission = function () { return Sales.InvoiceDetailRow.insertPermission; };
            InvoiceDetailGrid.prototype.getLocalTextPrefix = function () { return Sales.InvoiceDetailRow.localTextPrefix; };
            InvoiceDetailGrid.prototype.getService = function () { return Sales.InvoiceDetailService.baseUrl; };
            InvoiceDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceDetailGrid);
            return InvoiceDetailGrid;
        }(Serenity.EntityGrid));
        Sales.InvoiceDetailGrid = InvoiceDetailGrid;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoicePaymentDialog = /** @class */ (function (_super) {
            __extends(InvoicePaymentDialog, _super);
            function InvoicePaymentDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Sales.InvoicePaymentForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                _this.form.InvoiceId.changeSelect2(function (args) {
                    var invoiceId = _this.form.InvoiceId.value;
                    if (Q.isEmptyOrNull(invoiceId)) {
                        _this.setCustomer({});
                        return;
                    }
                    Sales.InvoiceService.Retrieve({
                        EntityId: invoiceId
                    }, function (response) {
                        _this.form.InvoiceAmount.value = response.Entity.Total;
                        _this.form.PaymentAmount.value = _this.form.InvoiceAmount.value;
                        Sales.SalesOrderService.Retrieve({
                            EntityId: response.Entity.SalesOrderId
                        }, function (response) {
                            Sales.CustomerService.Retrieve({
                                EntityId: response.Entity.CustomerId
                            }, function (response) {
                                _this.setCustomer(response.Entity);
                            });
                        });
                    });
                });
                return _this;
            }
            InvoicePaymentDialog.prototype.getFormKey = function () { return Sales.InvoicePaymentForm.formKey; };
            InvoicePaymentDialog.prototype.getIdProperty = function () { return Sales.InvoicePaymentRow.idProperty; };
            InvoicePaymentDialog.prototype.getLocalTextPrefix = function () { return Sales.InvoicePaymentRow.localTextPrefix; };
            InvoicePaymentDialog.prototype.getNameProperty = function () { return Sales.InvoicePaymentRow.nameProperty; };
            InvoicePaymentDialog.prototype.getService = function () { return Sales.InvoicePaymentService.baseUrl; };
            InvoicePaymentDialog.prototype.getDeletePermission = function () { return Sales.InvoicePaymentRow.deletePermission; };
            InvoicePaymentDialog.prototype.getInsertPermission = function () { return Sales.InvoicePaymentRow.insertPermission; };
            InvoicePaymentDialog.prototype.getUpdatePermission = function () { return Sales.InvoicePaymentRow.updatePermission; };
            InvoicePaymentDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            InvoicePaymentDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            InvoicePaymentDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.InvoiceAmount.element.attr('readonly', 'readonly');
                this.form.InvoiceAmount.element.addClass('readonly');
                this.toolbar.findButton('print-payment').toggle(this.isEditMode());
            };
            InvoicePaymentDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    InvoiceKu.Sales.InvoicePaymentService.Currency({}, function (response) {
                        _this.form.CurrencyName.value = response.Currency;
                    });
                }
            };
            InvoicePaymentDialog.prototype.setCustomer = function (vendor) {
                this.form.CustomerName.value = vendor.Name;
                this.form.CustomerStreet.value = vendor.Street;
                this.form.CustomerCity.value = vendor.City;
                this.form.CustomerState.value = vendor.State;
                this.form.CustomerZipCode.value = vendor.ZipCode;
                this.form.CustomerPhone.value = vendor.Phone;
                this.form.CustomerEmail.value = vendor.Email;
            };
            InvoicePaymentDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                    title: 'Print Payment',
                    cssClass: 'export-pdf-button print-payment',
                    reportKey: 'InvoicePaymentPrint',
                    getParams: function () { return ({
                        Id: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            InvoicePaymentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoicePaymentDialog);
            return InvoicePaymentDialog;
        }(Serenity.EntityDialog));
        Sales.InvoicePaymentDialog = InvoicePaymentDialog;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoicePaymentEditor = /** @class */ (function (_super) {
            __extends(InvoicePaymentEditor, _super);
            function InvoicePaymentEditor(container) {
                return _super.call(this, container) || this;
            }
            InvoicePaymentEditor.prototype.getColumnsKey = function () { return Sales.InvoicePaymentColumns.columnsKey; };
            InvoicePaymentEditor.prototype.getDialogType = function () { return Sales.InvoicePaymentDialog; };
            InvoicePaymentEditor.prototype.getLocalTextPrefix = function () { return Sales.InvoicePaymentRow.localTextPrefix; };
            InvoicePaymentEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            InvoicePaymentEditor.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                var addButton = this.toolbar.findButton('add-button');
                addButton.toggleClass('hide', true);
            };
            InvoicePaymentEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoicePaymentEditor);
            return InvoicePaymentEditor;
        }(Serenity.Extensions.GridEditorBase));
        Sales.InvoicePaymentEditor = InvoicePaymentEditor;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var InvoicePaymentGrid = /** @class */ (function (_super) {
            __extends(InvoicePaymentGrid, _super);
            function InvoicePaymentGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoicePaymentGrid.prototype.getColumnsKey = function () { return Sales.InvoicePaymentColumns.columnsKey; };
            InvoicePaymentGrid.prototype.getDialogType = function () { return Sales.InvoicePaymentDialog; };
            InvoicePaymentGrid.prototype.getIdProperty = function () { return Sales.InvoicePaymentRow.idProperty; };
            InvoicePaymentGrid.prototype.getInsertPermission = function () { return Sales.InvoicePaymentRow.insertPermission; };
            InvoicePaymentGrid.prototype.getLocalTextPrefix = function () { return Sales.InvoicePaymentRow.localTextPrefix; };
            InvoicePaymentGrid.prototype.getService = function () { return Sales.InvoicePaymentService.baseUrl; };
            InvoicePaymentGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            InvoicePaymentGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    id: 'Print Selected',
                    field: null,
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-selected" title="print-selected">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            InvoicePaymentGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-selected')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'InvoicePaymentPrint',
                            params: {
                                Id: item.Id
                            }
                        });
                    }
                }
            };
            InvoicePaymentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoicePaymentGrid);
            return InvoicePaymentGrid;
        }(Serenity.EntityGrid));
        Sales.InvoicePaymentGrid = InvoicePaymentGrid;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesChannelDialog = /** @class */ (function (_super) {
            __extends(SalesChannelDialog, _super);
            function SalesChannelDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Sales.SalesChannelForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            SalesChannelDialog.prototype.getFormKey = function () { return Sales.SalesChannelForm.formKey; };
            SalesChannelDialog.prototype.getIdProperty = function () { return Sales.SalesChannelRow.idProperty; };
            SalesChannelDialog.prototype.getLocalTextPrefix = function () { return Sales.SalesChannelRow.localTextPrefix; };
            SalesChannelDialog.prototype.getNameProperty = function () { return Sales.SalesChannelRow.nameProperty; };
            SalesChannelDialog.prototype.getService = function () { return Sales.SalesChannelService.baseUrl; };
            SalesChannelDialog.prototype.getDeletePermission = function () { return Sales.SalesChannelRow.deletePermission; };
            SalesChannelDialog.prototype.getInsertPermission = function () { return Sales.SalesChannelRow.insertPermission; };
            SalesChannelDialog.prototype.getUpdatePermission = function () { return Sales.SalesChannelRow.updatePermission; };
            SalesChannelDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            SalesChannelDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            SalesChannelDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesChannelDialog);
            return SalesChannelDialog;
        }(Serenity.EntityDialog));
        Sales.SalesChannelDialog = SalesChannelDialog;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesChannelGrid = /** @class */ (function (_super) {
            __extends(SalesChannelGrid, _super);
            function SalesChannelGrid(container) {
                return _super.call(this, container) || this;
            }
            SalesChannelGrid.prototype.getColumnsKey = function () { return Sales.SalesChannelColumns.columnsKey; };
            SalesChannelGrid.prototype.getDialogType = function () { return Sales.SalesChannelDialog; };
            SalesChannelGrid.prototype.getIdProperty = function () { return Sales.SalesChannelRow.idProperty; };
            SalesChannelGrid.prototype.getInsertPermission = function () { return Sales.SalesChannelRow.insertPermission; };
            SalesChannelGrid.prototype.getLocalTextPrefix = function () { return Sales.SalesChannelRow.localTextPrefix; };
            SalesChannelGrid.prototype.getService = function () { return Sales.SalesChannelService.baseUrl; };
            SalesChannelGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            SalesChannelGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            SalesChannelGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesChannelGrid);
            return SalesChannelGrid;
        }(Serenity.EntityGrid));
        Sales.SalesChannelGrid = SalesChannelGrid;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesOrderDialog = /** @class */ (function (_super) {
            __extends(SalesOrderDialog, _super);
            function SalesOrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Sales.SalesOrderForm(_this.idPrefix);
                _this.form.ItemList.element.css('height', '300px');
                _this.form.ItemList.view.onRowCountChanged.subscribe(function () {
                    _this.recalculate();
                });
                _this.form.ItemList.view.onDataChanged.subscribe(function () {
                    _this.recalculate();
                });
                _this.form.OtherCharge.change(function () {
                    _this.recalculate();
                });
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                _this.form.CustomerId.changeSelect2(function (args) {
                    var customerId = _this.form.CustomerId.value;
                    if (Q.isEmptyOrNull(customerId)) {
                        _this.setCustomer({});
                        return;
                    }
                    Sales.CustomerService.Retrieve({
                        EntityId: customerId
                    }, function (response) {
                        _this.setCustomer(response.Entity);
                    });
                });
                return _this;
            }
            SalesOrderDialog.prototype.getFormKey = function () { return Sales.SalesOrderForm.formKey; };
            SalesOrderDialog.prototype.getIdProperty = function () { return Sales.SalesOrderRow.idProperty; };
            SalesOrderDialog.prototype.getLocalTextPrefix = function () { return Sales.SalesOrderRow.localTextPrefix; };
            SalesOrderDialog.prototype.getNameProperty = function () { return Sales.SalesOrderRow.nameProperty; };
            SalesOrderDialog.prototype.getService = function () { return Sales.SalesOrderService.baseUrl; };
            SalesOrderDialog.prototype.getDeletePermission = function () { return Sales.SalesOrderRow.deletePermission; };
            SalesOrderDialog.prototype.getInsertPermission = function () { return Sales.SalesOrderRow.insertPermission; };
            SalesOrderDialog.prototype.getUpdatePermission = function () { return Sales.SalesOrderRow.updatePermission; };
            SalesOrderDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            SalesOrderDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            SalesOrderDialog.prototype.recalculate = function () {
                this.form.SubTotal.value = 0;
                this.form.BeforeTax.value = 0;
                this.form.Discount.value = 0;
                this.form.TaxAmount.value = 0;
                this.form.Total.value = 0;
                for (var _i = 0, _a = this.form.ItemList.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.form.SubTotal.value += item.SubTotal;
                    this.form.Discount.value += item.Discount;
                    this.form.BeforeTax.value += item.BeforeTax;
                    this.form.TaxAmount.value += item.TaxAmount;
                    this.form.Total.value += item.Total;
                }
                this.form.Total.value += this.form.OtherCharge.value;
            };
            SalesOrderDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.isNew()) {
                    InvoiceKu.Sales.SalesOrderService.Currency({}, function (response) {
                        _this.form.CurrencyName.value = response.Currency;
                    });
                }
            };
            SalesOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('print-so').toggle(this.isEditMode());
            };
            SalesOrderDialog.prototype.setCustomer = function (customer) {
                this.form.CustomerName.value = customer.Name;
                this.form.CustomerStreet.value = customer.Street;
                this.form.CustomerCity.value = customer.City;
                this.form.CustomerState.value = customer.State;
                this.form.CustomerZipCode.value = customer.ZipCode;
                this.form.CustomerPhone.value = customer.Phone;
                this.form.CustomerEmail.value = customer.Email;
            };
            SalesOrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                    title: 'Print SO',
                    cssClass: 'export-pdf-button print-so',
                    reportKey: 'SalesOrderPrint',
                    getParams: function () { return ({
                        Id: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            SalesOrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], SalesOrderDialog);
            return SalesOrderDialog;
        }(Serenity.EntityDialog));
        Sales.SalesOrderDialog = SalesOrderDialog;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesOrderGrid = /** @class */ (function (_super) {
            __extends(SalesOrderGrid, _super);
            function SalesOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            SalesOrderGrid.prototype.getColumnsKey = function () { return Sales.SalesOrderColumns.columnsKey; };
            SalesOrderGrid.prototype.getDialogType = function () { return Sales.SalesOrderDialog; };
            SalesOrderGrid.prototype.getIdProperty = function () { return Sales.SalesOrderRow.idProperty; };
            SalesOrderGrid.prototype.getInsertPermission = function () { return Sales.SalesOrderRow.insertPermission; };
            SalesOrderGrid.prototype.getLocalTextPrefix = function () { return Sales.SalesOrderRow.localTextPrefix; };
            SalesOrderGrid.prototype.getService = function () { return Sales.SalesOrderService.baseUrl; };
            SalesOrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            SalesOrderGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    id: 'Print Selected',
                    field: null,
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-selected" title="print-selected">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            SalesOrderGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-selected')) {
                        Serenity.Extensions.ReportHelper.execute({
                            reportKey: 'SalesOrderPrint',
                            params: {
                                Id: item.Id
                            }
                        });
                    }
                }
            };
            SalesOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesOrderGrid);
            return SalesOrderGrid;
        }(Serenity.EntityGrid));
        Sales.SalesOrderGrid = SalesOrderGrid;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesOrderDetailDialog = /** @class */ (function (_super) {
            __extends(SalesOrderDetailDialog, _super);
            function SalesOrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Sales.SalesOrderDetailForm(_this.idPrefix);
                _this.form.Price.change(function () {
                    _this.recalculate();
                });
                _this.form.Qty.change(function () {
                    _this.recalculate();
                });
                _this.form.Discount.change(function () {
                    _this.recalculate();
                });
                _this.form.TaxPercentage.change(function () {
                    _this.recalculate();
                });
                _this.form.ProductId.changeSelect2(function (args) {
                    var productId = _this.form.ProductId.value;
                    if (Q.isEmptyOrNull(productId)) {
                        return;
                    }
                    InvoiceKu.Merchandise.ProductService.Retrieve({
                        EntityId: productId
                    }, function (response) {
                        _this.form.Price.value = response.Entity.SalesPrice;
                        InvoiceKu.Settings.SalesTaxService.Retrieve({
                            EntityId: response.Entity.SalesTaxId
                        }, function (response) {
                            _this.form.TaxPercentage.value = response.Entity.TaxRatePercentage;
                            _this.recalculate();
                        });
                    });
                });
                return _this;
            }
            SalesOrderDetailDialog.prototype.getFormKey = function () { return Sales.SalesOrderDetailForm.formKey; };
            SalesOrderDetailDialog.prototype.getLocalTextPrefix = function () { return Sales.SalesOrderDetailRow.localTextPrefix; };
            SalesOrderDetailDialog.prototype.recalculate = function () {
                this.form.SubTotal.value = this.form.Price.value * this.form.Qty.value;
                this.form.BeforeTax.value = this.form.SubTotal.value - this.form.Discount.value;
                this.form.TaxAmount.value = (this.form.TaxPercentage.value * this.form.BeforeTax.value) / 100;
                this.form.Total.value = this.form.BeforeTax.value + this.form.TaxAmount.value;
            };
            SalesOrderDetailDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.form.SubTotal.element.attr('readonly', 'readonly');
                this.form.SubTotal.element.addClass('readonly');
                this.form.BeforeTax.element.attr('readonly', 'readonly');
                this.form.BeforeTax.element.addClass('readonly');
                this.form.TaxAmount.element.attr('readonly', 'readonly');
                this.form.TaxAmount.element.addClass('readonly');
                this.form.Total.element.attr('readonly', 'readonly');
                this.form.Total.element.addClass('readonly');
            };
            SalesOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesOrderDetailDialog);
            return SalesOrderDetailDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Sales.SalesOrderDetailDialog = SalesOrderDetailDialog;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesOrderDetailEditor = /** @class */ (function (_super) {
            __extends(SalesOrderDetailEditor, _super);
            function SalesOrderDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            SalesOrderDetailEditor.prototype.getColumnsKey = function () { return Sales.SalesOrderDetailColumns.columnsKey; };
            SalesOrderDetailEditor.prototype.getDialogType = function () { return Sales.SalesOrderDetailDialog; };
            SalesOrderDetailEditor.prototype.getLocalTextPrefix = function () { return Sales.SalesOrderDetailRow.localTextPrefix; };
            SalesOrderDetailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.ProductName = InvoiceKu.Merchandise.ProductRow.getLookup()
                    .itemById[row.ProductId].Name;
                return true;
            };
            SalesOrderDetailEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesOrderDetailEditor);
            return SalesOrderDetailEditor;
        }(Serenity.Extensions.GridEditorBase));
        Sales.SalesOrderDetailEditor = SalesOrderDetailEditor;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Sales;
    (function (Sales) {
        var SalesOrderDetailGrid = /** @class */ (function (_super) {
            __extends(SalesOrderDetailGrid, _super);
            function SalesOrderDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            SalesOrderDetailGrid.prototype.getColumnsKey = function () { return Sales.SalesOrderDetailColumns.columnsKey; };
            SalesOrderDetailGrid.prototype.getDialogType = function () { return Sales.SalesOrderDetailDialog; };
            SalesOrderDetailGrid.prototype.getIdProperty = function () { return Sales.SalesOrderDetailRow.idProperty; };
            SalesOrderDetailGrid.prototype.getInsertPermission = function () { return Sales.SalesOrderDetailRow.insertPermission; };
            SalesOrderDetailGrid.prototype.getLocalTextPrefix = function () { return Sales.SalesOrderDetailRow.localTextPrefix; };
            SalesOrderDetailGrid.prototype.getService = function () { return Sales.SalesOrderDetailService.baseUrl; };
            SalesOrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesOrderDetailGrid);
            return SalesOrderDetailGrid;
        }(Serenity.EntityGrid));
        Sales.SalesOrderDetailGrid = SalesOrderDetailGrid;
    })(Sales = InvoiceKu.Sales || (InvoiceKu.Sales = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var CashBankDialog = /** @class */ (function (_super) {
            __extends(CashBankDialog, _super);
            function CashBankDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Settings.CashBankForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            CashBankDialog.prototype.getFormKey = function () { return Settings.CashBankForm.formKey; };
            CashBankDialog.prototype.getIdProperty = function () { return Settings.CashBankRow.idProperty; };
            CashBankDialog.prototype.getLocalTextPrefix = function () { return Settings.CashBankRow.localTextPrefix; };
            CashBankDialog.prototype.getNameProperty = function () { return Settings.CashBankRow.nameProperty; };
            CashBankDialog.prototype.getService = function () { return Settings.CashBankService.baseUrl; };
            CashBankDialog.prototype.getDeletePermission = function () { return Settings.CashBankRow.deletePermission; };
            CashBankDialog.prototype.getInsertPermission = function () { return Settings.CashBankRow.insertPermission; };
            CashBankDialog.prototype.getUpdatePermission = function () { return Settings.CashBankRow.updatePermission; };
            CashBankDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CashBankDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CashBankDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CashBankDialog);
            return CashBankDialog;
        }(Serenity.EntityDialog));
        Settings.CashBankDialog = CashBankDialog;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var CashBankGrid = /** @class */ (function (_super) {
            __extends(CashBankGrid, _super);
            function CashBankGrid(container) {
                return _super.call(this, container) || this;
            }
            CashBankGrid.prototype.getColumnsKey = function () { return Settings.CashBankColumns.columnsKey; };
            CashBankGrid.prototype.getDialogType = function () { return Settings.CashBankDialog; };
            CashBankGrid.prototype.getIdProperty = function () { return Settings.CashBankRow.idProperty; };
            CashBankGrid.prototype.getInsertPermission = function () { return Settings.CashBankRow.insertPermission; };
            CashBankGrid.prototype.getLocalTextPrefix = function () { return Settings.CashBankRow.localTextPrefix; };
            CashBankGrid.prototype.getService = function () { return Settings.CashBankService.baseUrl; };
            CashBankGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            CashBankGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CashBankGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CashBankGrid);
            return CashBankGrid;
        }(Serenity.EntityGrid));
        Settings.CashBankGrid = CashBankGrid;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var MyCompanyDialog = /** @class */ (function (_super) {
            __extends(MyCompanyDialog, _super);
            function MyCompanyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Settings.MyCompanyForm(_this.idPrefix);
                return _this;
            }
            MyCompanyDialog.prototype.getFormKey = function () { return Settings.MyCompanyForm.formKey; };
            MyCompanyDialog.prototype.getIdProperty = function () { return Settings.MyCompanyRow.idProperty; };
            MyCompanyDialog.prototype.getLocalTextPrefix = function () { return Settings.MyCompanyRow.localTextPrefix; };
            MyCompanyDialog.prototype.getNameProperty = function () { return Settings.MyCompanyRow.nameProperty; };
            MyCompanyDialog.prototype.getService = function () { return Settings.MyCompanyService.baseUrl; };
            MyCompanyDialog.prototype.getDeletePermission = function () { return Settings.MyCompanyRow.deletePermission; };
            MyCompanyDialog.prototype.getInsertPermission = function () { return Settings.MyCompanyRow.insertPermission; };
            MyCompanyDialog.prototype.getUpdatePermission = function () { return Settings.MyCompanyRow.updatePermission; };
            MyCompanyDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.deleteButton.hide();
            };
            MyCompanyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MyCompanyDialog);
            return MyCompanyDialog;
        }(Serenity.EntityDialog));
        Settings.MyCompanyDialog = MyCompanyDialog;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var MyCompanyGrid = /** @class */ (function (_super) {
            __extends(MyCompanyGrid, _super);
            function MyCompanyGrid(container) {
                return _super.call(this, container) || this;
            }
            MyCompanyGrid.prototype.getColumnsKey = function () { return Settings.MyCompanyColumns.columnsKey; };
            MyCompanyGrid.prototype.getDialogType = function () { return Settings.MyCompanyDialog; };
            MyCompanyGrid.prototype.getIdProperty = function () { return Settings.MyCompanyRow.idProperty; };
            MyCompanyGrid.prototype.getInsertPermission = function () { return Settings.MyCompanyRow.insertPermission; };
            MyCompanyGrid.prototype.getLocalTextPrefix = function () { return Settings.MyCompanyRow.localTextPrefix; };
            MyCompanyGrid.prototype.getService = function () { return Settings.MyCompanyService.baseUrl; };
            MyCompanyGrid.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                var addButton = this.toolbar.findButton('add-button');
                addButton.hide();
            };
            MyCompanyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MyCompanyGrid);
            return MyCompanyGrid;
        }(Serenity.EntityGrid));
        Settings.MyCompanyGrid = MyCompanyGrid;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var PurchaseTaxDialog = /** @class */ (function (_super) {
            __extends(PurchaseTaxDialog, _super);
            function PurchaseTaxDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Settings.PurchaseTaxForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            PurchaseTaxDialog.prototype.getFormKey = function () { return Settings.PurchaseTaxForm.formKey; };
            PurchaseTaxDialog.prototype.getIdProperty = function () { return Settings.PurchaseTaxRow.idProperty; };
            PurchaseTaxDialog.prototype.getLocalTextPrefix = function () { return Settings.PurchaseTaxRow.localTextPrefix; };
            PurchaseTaxDialog.prototype.getNameProperty = function () { return Settings.PurchaseTaxRow.nameProperty; };
            PurchaseTaxDialog.prototype.getService = function () { return Settings.PurchaseTaxService.baseUrl; };
            PurchaseTaxDialog.prototype.getDeletePermission = function () { return Settings.PurchaseTaxRow.deletePermission; };
            PurchaseTaxDialog.prototype.getInsertPermission = function () { return Settings.PurchaseTaxRow.insertPermission; };
            PurchaseTaxDialog.prototype.getUpdatePermission = function () { return Settings.PurchaseTaxRow.updatePermission; };
            PurchaseTaxDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            PurchaseTaxDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            PurchaseTaxDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseTaxDialog);
            return PurchaseTaxDialog;
        }(Serenity.EntityDialog));
        Settings.PurchaseTaxDialog = PurchaseTaxDialog;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var PurchaseTaxGrid = /** @class */ (function (_super) {
            __extends(PurchaseTaxGrid, _super);
            function PurchaseTaxGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseTaxGrid.prototype.getColumnsKey = function () { return Settings.PurchaseTaxColumns.columnsKey; };
            PurchaseTaxGrid.prototype.getDialogType = function () { return Settings.PurchaseTaxDialog; };
            PurchaseTaxGrid.prototype.getIdProperty = function () { return Settings.PurchaseTaxRow.idProperty; };
            PurchaseTaxGrid.prototype.getInsertPermission = function () { return Settings.PurchaseTaxRow.insertPermission; };
            PurchaseTaxGrid.prototype.getLocalTextPrefix = function () { return Settings.PurchaseTaxRow.localTextPrefix; };
            PurchaseTaxGrid.prototype.getService = function () { return Settings.PurchaseTaxService.baseUrl; };
            PurchaseTaxGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            PurchaseTaxGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            PurchaseTaxGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseTaxGrid);
            return PurchaseTaxGrid;
        }(Serenity.EntityGrid));
        Settings.PurchaseTaxGrid = PurchaseTaxGrid;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var SalesTaxDialog = /** @class */ (function (_super) {
            __extends(SalesTaxDialog, _super);
            function SalesTaxDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Settings.SalesTaxForm(_this.idPrefix);
                InvoiceKu.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            SalesTaxDialog.prototype.getFormKey = function () { return Settings.SalesTaxForm.formKey; };
            SalesTaxDialog.prototype.getIdProperty = function () { return Settings.SalesTaxRow.idProperty; };
            SalesTaxDialog.prototype.getLocalTextPrefix = function () { return Settings.SalesTaxRow.localTextPrefix; };
            SalesTaxDialog.prototype.getNameProperty = function () { return Settings.SalesTaxRow.nameProperty; };
            SalesTaxDialog.prototype.getService = function () { return Settings.SalesTaxService.baseUrl; };
            SalesTaxDialog.prototype.getDeletePermission = function () { return Settings.SalesTaxRow.deletePermission; };
            SalesTaxDialog.prototype.getInsertPermission = function () { return Settings.SalesTaxRow.insertPermission; };
            SalesTaxDialog.prototype.getUpdatePermission = function () { return Settings.SalesTaxRow.updatePermission; };
            SalesTaxDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            SalesTaxDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            SalesTaxDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesTaxDialog);
            return SalesTaxDialog;
        }(Serenity.EntityDialog));
        Settings.SalesTaxDialog = SalesTaxDialog;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));
var InvoiceKu;
(function (InvoiceKu) {
    var Settings;
    (function (Settings) {
        var SalesTaxGrid = /** @class */ (function (_super) {
            __extends(SalesTaxGrid, _super);
            function SalesTaxGrid(container) {
                return _super.call(this, container) || this;
            }
            SalesTaxGrid.prototype.getColumnsKey = function () { return Settings.SalesTaxColumns.columnsKey; };
            SalesTaxGrid.prototype.getDialogType = function () { return Settings.SalesTaxDialog; };
            SalesTaxGrid.prototype.getIdProperty = function () { return Settings.SalesTaxRow.idProperty; };
            SalesTaxGrid.prototype.getInsertPermission = function () { return Settings.SalesTaxRow.insertPermission; };
            SalesTaxGrid.prototype.getLocalTextPrefix = function () { return Settings.SalesTaxRow.localTextPrefix; };
            SalesTaxGrid.prototype.getService = function () { return Settings.SalesTaxService.baseUrl; };
            SalesTaxGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            SalesTaxGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            SalesTaxGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesTaxGrid);
            return SalesTaxGrid;
        }(Serenity.EntityGrid));
        Settings.SalesTaxGrid = SalesTaxGrid;
    })(Settings = InvoiceKu.Settings || (InvoiceKu.Settings = {}));
})(InvoiceKu || (InvoiceKu = {}));