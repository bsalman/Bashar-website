export const allMyInfosPost = async (userId) => {
  try {
    const response = await fetch("/api/userInfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId })
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Cannot get the data, response number is: ${response.status}`
      );
    }
  } catch (err) {
    throw new Error("Fetch failed:", err.message);
  }
};

export const allMySkillsPost = async () => {
  try {
    const response = await fetch("/api/getSkills", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      throw new Error(
        `Cannot get the data, response number is: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const allMyProjectsPost = async () => {
  try {
    const response = await fetch("/api/getProjects", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Cannot get the data, response number is: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const allMyEducationPost = async () => {
  try {
    const response = await fetch("/api/getEducationPost", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Cannot get the data, response number is: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const allMyExperiencePost = async () => {
  try {
    const response = await fetch("/api/getExperiencePost", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Cannot get the data, response number is: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const footerInfoPost = async () => {
  try {
    const response = await fetch("/api/getFooterInfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(
        `Cannot get the data, response number is: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const sendEmail = async (name, email, title, text) => {
  const sendData = {
    name,
    email,
    title,
    text
  };
  const response = await fetch("/api/contact", {
    method: "Post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(sendData)
  });
  console.log(response);

  if (response.ok) {
    const data = await response.json();
    console.log(data);

    return 200;
  } else {
    throw new Error(
      `Cannot get the data, response number is: ${response.status}`
    );
  }
};
