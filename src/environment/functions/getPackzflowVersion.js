import api from '../../../dev/environment/apiPortalVersion.js';

export default function getCloudflowVersion() {
    const { packzflow_major, packzflow_minor, packzflow_build } = api.portal.version();
    return `${packzflow_major}.${packzflow_minor} b${packzflow_build}`;
}

getCloudflowVersion(); //?
