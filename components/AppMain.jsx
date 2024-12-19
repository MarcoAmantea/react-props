import AppCard from "./AppCard"
import posts from "../data/posts"



function AppMain() {


    return (
        <main>
            <div className="container">
                <div className="row">

                    {posts.map((post) => (
                        <div key={post.id} className="col">
                            <AppCard
                                image={post.image}
                                title={post.title}
                                content={post.content}
                                tags={post.tags} 
                            />

                          
                        </div>
                    
                    ))
                    }

                </div>
            </div>
        </main>
    )
}

export default AppMain 