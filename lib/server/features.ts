/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/* global crypto */

export function isFingerprintSupported() {
  return false;
}

export function isPopupPostMessageSupported() {
  return false;
}

export function isTokenVerifySupported() {
  return typeof crypto !== 'undefined' && crypto.subtle && typeof Uint8Array !== 'undefined';
}

export function hasTextEncoder() {
  // eslint-disable-next-line node/no-unsupported-features/node-builtins
  return typeof TextEncoder !== 'undefined';
}

export function isPKCESupported() {
  return isTokenVerifySupported() && hasTextEncoder();
}

export function isHTTPS() {
  return false;
}

export function isLocalhost() {
  return false;
}

