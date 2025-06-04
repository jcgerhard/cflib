//import api from '../../../dev/environment/apiPortalVersion.js';

export default function getCloudflowVersion() {
    const { major, minor, rev, build } = api.portal.version();
    return `${major}.${minor}.${rev} b${build}`;
}
