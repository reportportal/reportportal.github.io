/*
 * Copyright 2022 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const MOBILE_MAX = 640;
const TABLET_MAX = 1024;

const SCREEN_MOBILE_MAX_MEDIA = `(max-width: ${MOBILE_MAX}px)`;
const SCREEN_TABLET_MAX_MEDIA = `(max-width: ${TABLET_MAX}px)`;

export const getIsMobileView = () => window.matchMedia(SCREEN_MOBILE_MAX_MEDIA).matches;
export const getIsTabletView = () => window.matchMedia(SCREEN_TABLET_MAX_MEDIA).matches;
