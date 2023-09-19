const UseLocalStorage = () => {
    const getUserIdStorage = () => {
        return Number(window.localStorage.getItem("userId"));
    };
    const getEmailStorage = () => {
        return window.localStorage.getItem("email");
    };
    const getAccessTokenStorage = () => {
        return window.localStorage.getItem("access_token");
    };
    const getRefreshTokenStorage = () => {
        return window.localStorage.getItem("refresh_token");
    };

    const setLocalStorage = (
        type,
        data,
    ) => {
        if (type === 1) {
            if (data !== null) {
                window.localStorage.setItem("userId", data.userId.toString());
                window.localStorage.setItem("email", data.email);
                window.localStorage.setItem("access_token", data.access_token);
                window.localStorage.setItem("refresh_token", data.refresh_token);
                window.localStorage.setItem("role", data.role);
            }
        } else if (type === 2) {
            window.localStorage.removeItem("userId");
            window.localStorage.removeItem("email");
            window.localStorage.removeItem("access_token");
            window.localStorage.removeItem("refresh_token");
            window.localStorage.removeItem("role");
        }
    };

    return {
        getUserIdStorage,
        getEmailStorage,
        getAccessTokenStorage,
        getRefreshTokenStorage,
        setLocalStorage,
    };
};

export default UseLocalStorage;