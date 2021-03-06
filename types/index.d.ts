/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Application } from "stimulus";

declare module "@symfony/stimulus-bridge" {

    export function startStimulusApp(context?: __WebpackModuleApi.RequireContext): Application;

}
