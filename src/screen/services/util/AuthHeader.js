export default function AuthHeader() {
    const user = JSON.parse(getData("user"));
    if (user && user.token) {
      return { Authorization: "Bearer " + user.token };
    } else {
      return {};
    }
  }