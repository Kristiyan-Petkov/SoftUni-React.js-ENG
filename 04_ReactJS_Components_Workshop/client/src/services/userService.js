const baseUrl = "http://localhost:3005/api/users";

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    
    return result.users;
}

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();

    return result.user;
}

export const create = async (userData) => {
    const newUser = {
        "firstName": userData.firstName,
        "lastName": userData.lastName,
        "email": userData.email,
        "imageUrl": userData.imageUrl,
        "phoneNumber": userData.phoneNumber,
        "address": {
            "country": userData.country,
            "city": userData.city,
            "street": userData.street,
            "streetNumber": userData.streetNumber
        },

    }

    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newUser),
    });

    const result = await response.json();
    return result;
}

export const editUser = async (userData) => {
    const editedUserData = {
        "firstName": userData.firstName,
        "lastName": userData.lastName,
        "email": userData.email,
        "imageUrl": userData.imageUrl,
        "phoneNumber": userData.phoneNumber,
        "address": {
            "country": userData.country,
            "city": userData.city,
            "street": userData.street,
            "streetNumber": userData.streetNumber
        },

    }

    const response = await fetch(`${baseUrl}/${userData.userId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(editedUserData),
    });

    const result = await response.json();
    return result;
}