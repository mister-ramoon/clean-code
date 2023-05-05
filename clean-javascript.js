class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    return true;
  }
}

class UserSettings extends UserAuth {
  constructor(settings) {
    super(user);
    this.settings = settings;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      console.log("Puede cambiar la configuración");
    }
  }
}

const newAccess = new UserSettings("Juan", "DarkMode");
newAccess.changeSettings();
