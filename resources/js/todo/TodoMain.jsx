import React, { useEffect, useState } from "react";
import { CardPost } from "./CardPost";

export const TodoMain = () => {
    const [post, setpost] = useState([]);
    const [form, setform] = useState({
        title: "",
        body: "",
        userId: 1,
    });
    const getData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        const data = await response.json();
        const datashort = data.slice(0, 10);
        console.log(datashort);
        setpost(datashort);
    };
    const postData = async (request) => {

        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url,{
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body:JSON.stringify(request)
        }) 
        const data = await response.json();
        console.log(data);

    }
    useEffect(() => {
        getData();

        return () => {};
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        postData(form);
    };
    const handleInputChange = (e) => {
        setform((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <div className="row">
                <div className="col-6 p-3 pt-3 pl-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>title</label>
                            <input
                                className="form-control"
                                name="title"
                                placeholder="escribe el titulo"
                                type="text"
                                onChange={handleInputChange}
                                value={form.title}
                            />
                        </div>
                        <div className="form-group">
                            <label>title</label>
                            <input
                                className="form-control"
                                placeholder="escribe el cuerpo del post"
                                name="body"
                                type="text"
                                onChange={handleInputChange}
                                value={form.body}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            enviar
                        </button>
                    </form>
                </div>
                <div className="col-6">
                    {post.map((data) => (
                        <CardPost key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </>
    );
};
