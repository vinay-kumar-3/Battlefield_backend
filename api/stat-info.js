module.exports = (req, res) => {
    const statInfo = {
        data: [
            { title: "players", value: 60 },
            { title: "ping", value: 104 },
            { title: "tickrate", value: 60 },
        ],
    };
    res.status(200).json(statInfo);
};
