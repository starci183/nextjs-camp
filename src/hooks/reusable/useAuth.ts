export const useAuth = () => {
    const token = localStorage.getItem("token")
    if (!token) {
        alert("Please login to continue")
        return
    }
}