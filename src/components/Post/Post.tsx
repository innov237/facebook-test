import React from 'react';
import "./Post.css";

const PostPage: React.FC = () => {

    var postData = [
        {
            'id': 1, "pseudo": "Jan2", "avatar": "https://www.afrik.com/wp-content/uploads/2021/02/samuel-eto-o-ok-696x392.jpg",
            'post':
            {
                'id': 1, "message": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets", "image": "https://beninwebtv.com/sport/wp-content/uploads/2021/11/Etoo.jpg", "created-at": "4:10pm",
                'comment': [
                    {
                        'id': 1, "message": "lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, ", "image": "https://www.leparisien.fr/resizer/s2Q0QKPRARmvypN8UXycS6yneC8=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/BT7PHPTGZQ7L7Q6RH5UWQM3NUE.jpg", "created-at": "4:10pm",
                        'user': { 'id': 1, "pseudo": "Jan2", "avatar": "https://mondialsport.ci/images/didier-drogba-nouvelle-recrue-de-canal-plus-16214-actu.jpg", }
                    }
                ]
            }
            ,
        },
        {
            'id': 2, "pseudo": "Issac", "avatar": "https://www.famousbirthdays.com/headshots/issac-yiu-3.jpg",
            'post':
            {
                'id': 2, "message": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham", "image": "https://sf2.bibamagazine.fr/wp-content/uploads/biba/2016/07/5-idees-de-repas-a-emporter-a-la-plage.jpg", "created-at": "4:10pm",
                'comment': [
                    {
                        'id': 1, "message": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered", "image": "https://media-cdn.tripadvisor.com/media/photo-s/01/63/86/27/plage-de-happy-bay.jpg", "created-at": "4:10pm",
                        'user': { 'id': 1, "pseudo": "Jan2", "avatar": "https://mondialsport.ci/images/didier-drogba-nouvelle-recrue-de-canal-plus-16214-actu.jpg", }
                    }
                    , {
                        'id': 1, "message": "search for 'lorem ipsum' will uncover many web sites still in their infancy", "image": null, "created-at": "4:10pm",
                        'user': { 'id': 1, "pseudo": "Jan2", "avatar": "https://mondialsport.ci/images/didier-drogba-nouvelle-recrue-de-canal-plus-16214-actu.jpg", }
                    }
                ]
            }
            ,
        },
        {
            'id': 3, "pseudo": "Larisa", "avatar": "https://www.lumibeauty.com/1623-large_default/mileva-hair-ponytail-afro-kinky-curl.jpg",
            'post':
            {
                'id': 3, "message": "post message", "image": "https://beninwebtv.com/sport/wp-content/uploads/2021/11/Etoo.jpg", "created-at": "4:10pm",
                'comment': [
                    {
                        'id': 1, "message": "Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H", "image": null, "created-at": "4:10pm",
                        'user': { 'id': 1, "pseudo": "Jan2", "avatar": "https://mondialsport.ci/images/didier-drogba-nouvelle-recrue-de-canal-plus-16214-actu.jpg", }
                    }
                ]
            }
            ,
        },

    ]

    var auhUser = { 'id': 1, 'pseudo': 'Jean2', 'avatar': "https://www.afrik.com/wp-content/uploads/2021/02/samuel-eto-o-ok-696x392.jpg" }

    return (
        <div className="container mt-2">
            <div className="card send-post-card p-2 mt-2 shadow-sm braduis">
                <input type="text" name="comment" className="form-control-lg" placeholder="What's on your mind ?" />
                <div className="d-flex justify-content-end">
                    <input type="submit" className="btn btn-primary mt-2 share-btn" value="Share" />
                </div>
            </div>
            {postData.map((data: any) => {
                return (<div className="post-content card mt-2 p-2 py-3 braduis">
                    <div className="user-post">
                        <div className="user-post-avatar">
                            <img src={data['avatar']} alt="avatar" className='user-avatar-circle' />
                        </div>
                        <div className="user-post-details ml-4">
                            <div className="user-post-message">
                                <p>{data['post']['message']}</p>
                                <p><img src={data['post']['image']} alt="avatar" className='post-image' /></p>
                                <div className="user-post-option d-flex">
                                    <div className="post-pseudo">{data['pseudo']} 4:10pm</div>
                                    <div className="edit-delete d-flex ml-2">
                                        <p className="edit">Edit</p>
                                        <p className="ml-2 edit">Delete</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {data['post']['comment'].map((result: any) => {
                        return (
                            <div className="user-post-comment">
                                <div className="user-post-comment-avatar">
                                    <img src="https://www.afrik.com/wp-content/uploads/2021/02/samuel-eto-o-ok-696x392.jpg" alt="avatar" className='user-avatar-circle avatar-sm' />
                                </div>
                                <div className="user-post-comment-details">
                                    <div className="user-post-comment-message">
                                        <p>{result['message']}</p>
                                        {result['image'] != null && <img src={result['image']} alt="avatar" className='post-image image-sm' />}
                                        <div className="user-post-option d-flex">
                                            <div className="post-pseudo">Jan2 4:10pm</div>
                                            <div className="edit-delete d-flex ml-2">
                                                <p className="edit edit-sm">Edit</p>
                                                <p className="ml-2 edit edit-sm">Delete</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="write-comment">
                        <input type="text" name="comment" placeholder="Write a comment" className="form-control" />
                    </div>
                </div>
                )
            })}
        </div>
    );
}

export default PostPage;