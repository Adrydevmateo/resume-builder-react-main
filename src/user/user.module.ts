import { useState } from "react";

export function UserState() {
  const [id, setId] = useState("");

  return { id, setId };
}

interface UserActions {
  signIN: (email: string, password: string) => Promise<void>;
}

export const userActions: UserActions = {
  signIN: async (email, password) => {
    if (email && password) {
      console.log("Welcome");
    }
  },
};
