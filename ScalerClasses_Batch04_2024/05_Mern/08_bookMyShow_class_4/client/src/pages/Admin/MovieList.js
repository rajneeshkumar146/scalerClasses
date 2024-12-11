import React from 'react';
import { Table } from "antd";


function MovieList() {
    const FakeMovies = [
        {
            key: "1",
            poster: "Image1",
            name: "Mastaney",
            description:
                "Set in 1739, Nadar Shah`s undefeated army was attacked by Sikh Rebellions. ",
            duration: 120,
            genre: "Action",
            language: "Hindi",
            releaseDate: "2023-10-25",
        },
        {
            key: "2",
            poster: "Image2",
            name: "Mastaney",
            description:
                "Set in 1739, Nadar Shah`s undefeated army was attacked by Sikh Rebellions. ",
            duration: 120,
            genre: "Action",
            language: "Hindi",
            releaseDate: "2023-10-25",
        },
    ];

    const tableHeadings = [
        {
            title: "Poster",
        },
        {
            title: "Movie Name",
            dataIndex: "name"
        },
        {
            title: "Description",
            dataIndex: "description",
        },
        {
            title: "Duration",
            dataIndex: "duration",
        },
        {
            title: "Genre",
            dataIndex: "genre",
        },
        {
            title: "Language",
            dataIndex: "language",
        },
        {
            title: "Release Date",
            dataIndex: "releaseDate",
        },
        {
            title: "Action",
        },
    ]

    retrun(
        <div>
            <Table dataSource={FakeMovies} columns={tableHeadings} />
        </div>
    )
}

export default MovieList;