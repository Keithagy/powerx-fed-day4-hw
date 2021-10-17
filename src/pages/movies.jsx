import { useAuthState } from 'domains/auth';
import { MovieItem, useMovies } from 'domains/movies';
import { useHistory } from 'react-router';

export const Movies = () => {
    const {data: movieItems} = useMovies()
    console.log("🚀 ~ file: movies.jsx ~ line 7 ~ Movies ~ movieItems", movieItems)
    const auth = useAuthState()
    const history = useHistory()


    if (auth.status !== 'authenticated' || !auth.accessToken) {
        auth.logout()
        history.replace('/login')
    }

    return (
        <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
                    Movies
                </h1>
            </div>
            <div className="bg-gray-50 lg:flex">
                <div className="flex-1">
                    {movieItems && (
                        <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
                            {movieItems.map((item) => (
                                <MovieItem {...item} key={item._id} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {!movieItems && (
                <div className="p-12 text-center text-3xl">Loading...</div>
            )}
        </div>
    );
};
