import axios from "axios";

// Pre-filled Google form link:
// https://docs.google.com/forms/d/e/1FAIpQLScmX6NTl2fMfxMuDuc8DLu1H3YQwGht2KTdJDgnzzesMgng_Q/formResponse?entry.303881909=Moeed+Afzal&entry.1466600208=moeed@email.com&entry.437323979=Dev+Test+Project&entry.447486164=Lahore,+Pakistan&entry.1573360330=www.moeed.com&entry.890497725=These+are+some+test+project+deatils

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

    formData.append("entry.303881909", name);
    formData.append("entry.1466600208", email);
    formData.append("entry.437323979", projectType);
    formData.append("entry.447486164", location);
    formData.append("entry.1573360330", website);
    formData.append("entry.890497725", projectDetails);

    const response = await axios.post(
      "https://docs.google.com/forms/d/e/1FAIpQLScmX6NTl2fMfxMuDuc8DLu1H3YQwGht2KTdJDgnzzesMgng_Q/formResponse",
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
