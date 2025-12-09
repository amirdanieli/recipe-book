const API_URL = "http://localhost:5000/api/auth"; //PLACE HOLDER

export const login = async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
        throw new Error("Login failed");
    }
    const data = await response.json();
    return data; //Return JWT here
};