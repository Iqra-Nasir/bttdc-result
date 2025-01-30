import { Store } from "pullstate";
import { API_URL } from "../../utils/url_config";

export const organizationStore = new Store({
  organization: {},
  organizationLoading: true,
  footerInfo: {},
  footerInfoLoading: true,
  globalMapLink: "",
  durations: [],
  shifts: [],
});


export const organizationFetch = async () => {
  try {
    const response = await fetch(`${API_URL}/api/organization-info`);
    const data = await response.json();
    organizationStore.update((s) => {
      s.organization = data?.data;
      s.footerInfo = data?.data?.footer_setting;
      s.organizationLoading = false;
      s.globalMapLink = data?.data?.footer_setting?.map_link;
    });
  } catch (error) {
    console.error("Error fetching organization:", error);
    organizationStore.update((s) => {
      s.organizationLoading = false;
    });
  }
};

export const getDuration = async () => {
  const response = await fetch(`${API_URL}/api/durations`);
  const data = await response.json();
  organizationStore.update((s) => {
    s.durations = data;
  });
};

export const getShift = async () => {
  const response = await fetch(`${API_URL}/api/shifts`);
  const data = await response.json();
  organizationStore.update((s) => {
    s.shifts = data;
  });
};

