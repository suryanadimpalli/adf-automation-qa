// spec.js

describe('ADF Demo App', function() {

 it('test', function() {
  browser.ignoreSynchronization = true;


browser.get(' http://qaexercise.envalfresco.com/settings');


element(by.className(".mat-select-value")).click();

element(by.id("mat-option-1")).click();

element(by.className(".mat-button-wrapper")).click();

element(by.id("username")).sendKeys("guest@example.com");

element(by.id("password")).sendKeys("Password");

element(by.id("login-button")).click();


browser.navigate().to("http://qaexercise.envalfresco.com/files");

element(by.css("button[data-automation-id='create-new-folder']")).click();

element(by.id("mat-dialog-title-0"))..isDisplayed();


element(by.id("adf-folder-name-input")).sendKeys("Surya");


element(by.id("adf-folder-create-button")).click();


element(by.css("button[data-automation-id='create-new-folder']")).click();

element(by.id("mat-dialog-title-0"))..isDisplayed();


element(by.id("adf-folder-name-input")).sendKeys("Surya");


element(by.id("adf-folder-create-button")).click();



expect(element(by.className(".mat-button-wrapper")).getText())
                        .toContain("There's already a folder with this name. Try a different name.");



element(by.css("div[data-automation-id='Surya']>div>div>img")).click();


element(by.id("action_memu_right_1")).click();


element(by.css("div[data-automation-id='DOCUMENT_LIST.ACTIONS.FOLDER.DELETE']")).click();


  });

});
