import axios from "axios";

// Pre-filled Google form link:
// https://docs.google.com/forms/d/e/1FAIpQLSc5XY--oxsEUm12gKYabDdk_4K9yrViI0Pw3BocdpCoZEQYVg/formResponse?entry.994405034=Moeed+2nd+Try&entry.1012298677=moeedafzal97@gmail.com&entry.900772407=Test+roject+type&entry.2145485130=Lahore,+Pakistan&entry.1878999967=https://www.moeedafzal.com&entry.270061993=These+are+my+test+project+details
// https://docs.google.com/forms/d/e/1FAIpQLSezknIBfpjdXHkFvdc3Ka-RczKZceu8jMTmu5Wj0FCbhZ3LTA/formResponse?&entry.1013712450=Moeed+Afzal&entry.1703144591=moeedafzal@gmail.com&entry.205279702=Test+Project+Type&entry.701942885=Lahore,+Pakistan&entry.506102470=https://www.moeedafzal.com&entry.1951510718=These+are+my+test+project+details

export async function POST(request) {
  try {
    const {
      name = "Test Name",
      email = "Test Email",
      projectType = "Test Project Type",
      location = "Test Location",
      website = "Test Website",
      projectDetails = "Test Project Details",
    } = await request.json();

    const formData = new FormData();
    formData.append("entry.1013712450", name);
    formData.append("entry.1703144591", email);
    formData.append("entry.205279702", projectType);
    formData.append("entry.701942885", location);
    formData.append("entry.506102470", website);
    formData.append("entry.1951510718", projectDetails);

    const response = await axios.post(
      "https://docs.google.com/forms/d/e/1FAIpQLSezknIBfpjdXHkFvdc3Ka-RczKZceu8jMTmu5Wj0FCbhZ3LTA/formResponse",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("Success; Response: ", response);
    return new Response("Form submitted successfully", { status: 200 });
  } catch (error) {
    console.error("Error submitting form: ", error);
    return new Response("Error submitting form", { status: 500 });
  }
}
