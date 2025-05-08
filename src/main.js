import * as cls from './colors/index.js';
import * as env from './environment/index.js';
import * as meta from './metadata/index.js';
import * as rip from './rip/index.js';
import * as sys from './system/index.js';
import * as user from './user/index.js';
import * as utils from './utilities/index.js';

/**
 * CFLib - Cloudflow Library
 * A comprehensive library for working with Cloudflow workflows and metadata.
 * All functionality is accessed through this main namespace.
 *
 * @namespace cflib
 */
const cflib = {
    cls,
    env,
    meta,
    rip,
    sys,
    user,
    utils,
};

export default cflib;
