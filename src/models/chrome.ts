
import { log } from "config/logging";
import { resolve } from "path";
import { WebDriver, Builder, By, Key, until } from "selenium-webdriver";

export default class ChromeInstance {
  private driver!: WebDriver;

  constructor () {
    //log.info("ENV:", process.env);
    const chromedriver_path = resolve(`${__dirname}/../drivers`, `chromedriver`);
    log.info("Constructor for Chrome Instance");
    log.info(`CHROME DRIVER PATH: ${chromedriver_path}`);
    process.env["webdriver.chrome.driver"] = chromedriver_path;
    log.info("webdriver.chrome.driver", process.env["webdriver.chrome.driver"]);

  }

  async setDriver() {
    this.driver = await new Builder().forBrowser('chrome').build();
  }
}

