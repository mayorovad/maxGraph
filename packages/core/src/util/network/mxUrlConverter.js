/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 * Updated to ES9 syntax by David Morrissey 2021
 * Type definitions from the typed-mxgraph project
 */

/**
 *
 * Class: mxUrlConverter
 *
 * Converts relative and absolute URLs to absolute URLs with protocol and domain.
 */
class mxUrlConverter {
  constructor() {
    // Empty constructor
  }

  /**
   * Variable: enabled
   *
   * Specifies if the converter is enabled. Default is true.
   */
  // enabled: boolean;
  enabled = true;

  /**
   * Variable: baseUrl
   *
   * Specifies the base URL to be used as a prefix for relative URLs.
   */
  // baseUrl: string;
  baseUrl = null;

  /**
   * Variable: baseDomain
   *
   * Specifies the base domain to be used as a prefix for absolute URLs.
   */
  // baseDomain: string;
  baseDomain = null;

  /**
   * Function: updateBaseUrl
   *
   * Private helper function to update the base URL.
   */
  // updateBaseUrl(): void;
  updateBaseUrl() {
    this.baseDomain = `${location.protocol}//${location.host}`;
    this.baseUrl = this.baseDomain + location.pathname;
    const tmp = this.baseUrl.lastIndexOf('/');

    // Strips filename etc
    if (tmp > 0) {
      this.baseUrl = this.baseUrl.substring(0, tmp + 1);
    }
  }

  /**
   * Function: isEnabled
   *
   * Returns <enabled>.
   */
  // isEnabled(): boolean;
  isEnabled() {
    return this.enabled;
  }

  /**
   * Function: setEnabled
   *
   * Sets <enabled>.
   */
  // setEnabled(value: boolean): void;
  setEnabled(value) {
    this.enabled = value;
  }

  /**
   * Function: getBaseUrl
   *
   * Returns <baseUrl>.
   */
  // getBaseUrl(): string;
  getBaseUrl() {
    return this.baseUrl;
  }

  /**
   * Function: setBaseUrl
   *
   * Sets <baseUrl>.
   */
  // setBaseUrl(value: string): void;
  setBaseUrl(value) {
    this.baseUrl = value;
  }

  /**
   * Function: getBaseDomain
   *
   * Returns <baseDomain>.
   */
  // getBaseDomain(): string;
  getBaseDomain() {
    return this.baseDomain;
  }

  /**
   * Function: setBaseDomain
   *
   * Sets <baseDomain>.
   */
  // setBaseDomain(value: string): void;
  setBaseDomain(value) {
    this.baseDomain = value;
  }

  /**
   * Function: isRelativeUrl
   *
   * Returns true if the given URL is relative.
   */
  // isRelativeUrl(url: string): boolean;
  isRelativeUrl(url) {
    return (
      url != null &&
      url.substring(0, 2) != '//' &&
      url.substring(0, 7) != 'http://' &&
      url.substring(0, 8) != 'https://' &&
      url.substring(0, 10) != 'data:image' &&
      url.substring(0, 7) != 'file://'
    );
  }

  /**
   * Function: convert
   *
   * Converts the given URL to an absolute URL with protol and domain.
   * Relative URLs are first converted to absolute URLs.
   */
  // convert(url: string): string;
  convert(url) {
    if (this.isEnabled() && this.isRelativeUrl(url)) {
      if (this.getBaseUrl() == null) {
        this.updateBaseUrl();
      }

      if (url.charAt(0) == '/') {
        url = this.getBaseDomain() + url;
      } else {
        url = this.getBaseUrl() + url;
      }
    }

    return url;
  }
}

export default mxUrlConverter;