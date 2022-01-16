export const apiURl = "https://localhost:5001";

export async function getFavoritesOfUserListAsync(userID) {
    let favorites;
    await fetch(apiURl + "/Favorites?userId=" + userID).then((response) => {
        return response.json();
    }).then((data) => { console.log("favorites of data: " + data); favorites = data;});
    return favorites;
}
export async function getFavoritesListAsync(userID) {
    let favorites;
    await fetch(apiURl + "/Catalog/favorites?userId=" + userID).then((response) => {
        return response.json();
    }).then((data) => {
            console.log("data: " + data);
            favorites = data.map(x => {
                return {
                    ID: x.id,
                    Title: x.title,
                    Subtitle: x.subTitle,
                    Description: x.descriptions,
                    Price: x.price,
                    Count: x.countP,
                    ImageSrc: x.imageSrc
                };
            })
        }
    );
    return favorites;
}

export async function addFavorites(userID, favoriteId) {
    fetch(apiURl + '/Favorites?userId=' + String(userID) + '&favorite=' + favoriteId, {method: "PUT"});
}

export async function removeFavorites(userID, favoriteId) {
    fetch(apiURl + '/Favorites?userId=' + String(userID) + '&favorite=' + favoriteId, {method: "DELETE"}).then(
        response => {
            if (response.status === 400) {
                this.snackbarText = "Current user have!";
                this.snackbar = true;
                return;
            }
            this.snackbarText = "User created success!";
            this.snackbar = true;
            this.step = 1;
            return;
        }
    );
}

export async function getCatalogListAsync() {
    let catalog;
    await fetch(apiURl + "/Catalog").then((response) => {
        return response.json();
    }).then((data) => {
            catalog = data.map(x => {
                return {
                    ID: x.id,
                    Title: x.title,
                    Subtitle: x.subTitle,
                    Description: x.descriptions,
                    Price: x.price,
                    Count: x.countP,
                    ImageSrc: x.imageSrc,
                };
            })
        }
    );
    console.log("catalog: " + catalog);
    return catalog;
}

export async function getBascketListAsync(userID) {
    let basket;
    await fetch(apiURl + "/Catalog/bascket?userId=" + userID).then((response) => {
        return response.json();
    }).then((data) => {
            basket = data.map(x => {
                return {
                    ID: x.id,
                    Title: x.title,
                    Subtitle: x.subTitle,
                    Description: x.descriptions,
                    Price: x.price,
                    Count: x.countP,
                    ImageSrc: x.imageSrc
                };
            })
        }
    );
    return basket;
}
