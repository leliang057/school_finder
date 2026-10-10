/* =========================
   ROOM DATABASE
========================= */

const rooms = [

    {
    id: "W.C.",
    name: "",
    allFloors: true,

    idsByFloor: {
        ground: ["GA-WC1", "GAWC", "GBWC", "GCWC"],
        first: ["1AWC", "1AWC1", "1BWC", "1CWC"],
        second: ["2AWC", "2CWC", "2CWC1"]
    },

    aliases: [
        "wc",
        "w.c.",
        "toilet",
        "toilets"
    ]

    },




    /* =========================
        ICONS
        ========================= */

    {
    id: "Stairs",
    name: "",
    allFloors: true,

    idsByFloor: {
        ground: ["gsta1_icon", "gsta2_icon", "gsta3_icon", "gsta4_icon", ],
        first: ["1sta1_icon", "1sta2_icon", "1sta3_icon", "1sta4_icon", ],
        second: ["2sta1_icon", "2sta2_icon", "2sta3_icon", "2sta4_icon", ]
    },

    aliases: [
        "stair",
        "staircase"
    ]
    },


    {
    id: "Elevator",
    name: "",
    allFloors: true,

    idsByFloor: {
        ground: ["gev1_icon", "gsev2_icon"],
        first:  ["1ev1_icon", "1ev2_icon" ],
        second: ["2ev1_icon", "2ev2_icon" ]
    },

    aliases: [
        "elevator",
        "ev",
        "lift"
    ]
    },


    {
    id: "Exit",
    name: "",
    allFloors: true,

    idsByFloor: {
        ground:[
            "gexit1_icon", "gexit2_icon", "gexit3_icon", "gexit4_icon", "gexit5_icon", "gexit6_icon",
            "gexit7_icon", "gexit8_icon", "gexit9_icon", "gexit10_icon", "gexit11_icon", "gexit12_icon"
        ],
    },

    aliases: [
        "exit",
        "exits"
    ]
    },





    /* =========================
        Ground Floor
        ========================= */

    {
        ids: ["PPC", "PPC2", "PPC3", "PPC4", "PPC5", "PPC31"],
        name: "Pre Primary Classrooms",
        floor: "ground",
        aliases: ["ppc"]
    }, 


    {
        id: "GA03",
        name: "Store",
        floor: "ground",
        aliases: [
            "ga03",
            "ga 03",
            "store",
            "storage"
        ]
    },

    {
        id: "GA06",
        name: "Cafe",
        floor: "ground",
        aliases: [
            "ga06",
            "ga 06",
            "cafe",
            "café"
        ]
    },

    {
        id: "GA10",
        name: "Pre Primary Play Area",
        floor: "ground",
        aliases: [
            "ga10",
            "ga 10",
            "pre primary play area",
            "play area"
        ]
    },

    {
        id: "GA17",
        name: "Laundry",
        floor: "ground",
        aliases: [
            "ga17",
            "ga 17",
            "laundry"
        ]
    },

    {
        id: "GA29",
        name: "",
        floor: "ground",
        aliases: [
            "ga29",
            "ga 29"
        ]
    },

    {
        id: "GA30",
        name: "",
        floor: "ground",
        aliases: [
            "ga30",
            "ga 30"
        ]
    },

    {
        id: "GA31",
        name: "",
        floor: "ground",
        aliases: [
            "ga31",
            "ga 31"
        ]
    },
    
    {
        id: "GB01",
        name: "Auditorium",
        floor: "ground",
        aliases: [
            "gb01",
            "gb 01",
            "auditorium",
        ]
    },

    {
        id: "GB05",
        name: "MAC Office",
        floor: "ground",
        aliases: [
            "gb05",
            "gb 05",
            "mac office",
            "mac"
        ]
    },

    {
        id: "GB06",
        name: "DP Study Hall",
        floor: "ground",
        aliases: [
            "gb06",
            "gb 06",
            "dp",
            "dp study hall",
            "study hall"
        ]
    },

    {
        id: "GB07",
        name: "Black Box",
        floor: "ground",
        aliases: [
            "gb07",
            "gb 07",
            "black box"
        ]
    },

    {
        id: "GB11",
        name: "",
        floor: "ground",
        aliases: [
            "gb11",
            "gb 11"
        ]
    },

    {
        id: "GB12",
        name: "DP Common Room",
        floor: "ground",
        aliases: [
            "gb12",
            "gb 12",
            "dp common room",
            "common room"
        ]
    },

    {
        id: "GB13",
        name: "Dance Studio",
        floor: "ground",
        aliases: [
            "gb13",
            "gb 13",
            "dance",
            "dance studio"
        ]
    },

    {
        id: "GB14",
        name: "Admissions Room",
        floor: "ground",
        aliases: [
            "gb14",
            "gb 14",
            "admissions",
            "admissions room"
        ]
    },

    {
        id: "GB15",
        name: "Student Support",
        floor: "ground",
        aliases: [
            "gb15",
            "gb 15",
            "student support"
        ]
    },

    {
        id: "GB16",
        name: "",
        floor: "ground",
        aliases: [
            "gb16",
            "gb 16"
        ]
    },

    {
        id: "GB17",
        name: "First Aid",
        floor: "ground",
        aliases: [
            "gb17",
            "gb 17",
            "first aid"
        ]
    },

    {
        id: "GB18",
        name: "",
        floor: "ground",
        aliases: [
            "gb18",
            "gb 18"
        ]
    },

    {
        id: "GC10",
        name: "lunchbox",
        floor: "ground",
        aliases: [
            "gc10",
            "gc 10",
            "lunch box",
            "lunchbox",
        ]
    },

    {
        id: "GC22",
        name: "Primary Form Room",
        floor: "ground",
        aliases: [
            "gc22",
            "gc 22",
            "primary form room"
        ]
    },

    {
        id: "Reception",
        name: "",
        floor: "ground",
        aliases: [
            "reception",
            " front desk",
        ]
    },


    /* =========================
        First Floor
        ========================= */

    {
        id: "1A06",
        name: "Business Management",
        floor: "first",
        aliases: ["1a06", "business management"]
    },

    {
        id: "1A07",
        name: "Business Manager & Finance",
        floor: "first",
        aliases: ["1a07", "business manager", "finance"]
    },

    {
        id: "1A08",
        name: "Primary Form Room",
        floor: "first",
        aliases: ["1a08", "primary form room"]
    },

    {
        id: "1A09",
        name: "Primary Form Room",
        floor: "first",
        aliases: ["1a09", "primary form room"]
    },

    {
        id: "1A10",
        name: "Primary Form Room",
        floor: "first",
        aliases: ["1a10", "primary form room"]
    },

    {
        id: "1A11",
        name: "Primary Form Room",
        floor: "first",
        aliases: ["1a11", "primary form room"]
    },

    {
        id: "1A16",
        name: "Admin Open Space",
        floor: "first",
        aliases: ["1a16", "admin", "admin open space"]
    },

    {
        id: "1A17",
        name: "Staff Room",
        floor: "first",
        aliases: ["1a17", "staff room"]
    },

    {
        id: "1A18",
        name: "Meeting Room",
        floor: "first",
        aliases: ["1a18", "meeting room"]
    },

    {
        id: "1A22",
        name: "Principal",
        floor: "first",
        aliases: ["1a22", "principal"]
    },

    {
        id: "1A23",
        name: "P.A. senior administrator",
        floor: "first",
        aliases: ["1a23", "pa", "senior administrator"]
    },

    {
        id: "1A24",
        name: "P.A. Office",
        floor: "first",
        aliases: ["1a24", "pa office"]
    },

    {
        id: "1A25",
        name: "Head of Secondary",
        floor: "first",
        aliases: ["1a25", "head of secondary"]
    },
    
    {
        id: "1B02",
        name: "Copy Room",
        floor: "first",
        aliases: ["1b02", "copy room"]
    },

    {
        id: "1B04",
        name: "Primary Form Room",
        floor: "first",
        aliases: ["1b04", "primary form room"]
    },

    {
        id: "1B05",
        name: "Primary Form Room",
        floor: "first",
        aliases: ["1b05", "primary form room"]
    },

    {
        id: "1B06",
        name: "Languages Room",
        floor: "first",
        aliases: ["1b06", "languages", "languages room"]
    },

    {
        id: "1B07",
        name: "Primary Form Room",
        floor: "first",
        aliases: ["1b07", "primary form room"]
    },

    {
        id: "1B08",
        name: "Primary Form Room",
        floor: "first",
        aliases: ["1b08", "primary form room"]
    },

    {
        id: "1B09",
        name: "",
        floor: "first",
        aliases: ["1b09"]
    },

    {
        id: "1B10",
        name: "Library",
        floor: "first",
        aliases: ["1b10", "library"]
    },

    {
        id: "1B11",
        name: "Primary Form Room",
        floor: "first",
        aliases: ["1b11", "primary form room"]
    },

    {
        id: "1B12",
        name: "Primary Form Room",
        floor: "first",
        aliases: ["1b12", "primary form room"]
    },

    {
        id: "1B13",
        name: "Primary Form Room",
        floor: "first",
        aliases: ["1b13", "primary form room"]
    },

    {
        id: "1C06",
        name: "",
        floor: "first",
        aliases: ["1c06"]
    },

    {
        id: "1C08",
        name: "Primary Art Room",
        floor: "first",
        aliases: ["1c08", "primary art", "primary art room"]
    },
    
    {
        id: "1C08A",
        name: "Primary Language Acquisition",
        floor: "first",
        aliases: ["1c08a", "primary language", "language acquisition"]
    },

    {
        id: "1C09",
        name: "Language and Literature",
        floor: "first",
        aliases: ["1c09", "language", "literature"]
    },

    {
        id: "1C10",
        name: "Language & Literature",
        floor: "first",
        aliases: ["1c10", "language", "literature"]
    },

    {
        id: "1C11",
        name: "",
        floor: "first",
        aliases: ["1c11"]
    },

    {
        id: "1C12",
        name: "Language & Literature",
        floor: "first",
        aliases: ["1c12", "language", "literature"]
    },

    {
        id: "1C21",
        name: "Store",
        floor: "first",
        aliases: ["1c21", "store"]
    },

    {
        id: "1C22",
        name: "EAL",
        floor: "first",
        aliases: ["1c22", "eal"]
    },

    {
        id: "1C23",
        name: "Brainbox",
        floor: "first",
        aliases: ["1c23", "brainbox"]
    },
    
    {
        id: "1C24",
        name: "The Den",
        floor: "first",
        aliases: ["1c24", "den", "the den"]
    },
    
    {
        id: "1C25",
        name: "Language & Literature",
        floor: "first",
        aliases: ["1c25", "language", "literature"]
    },

    {
        id: "1C26",
        name: "Languages Room",
        floor: "first",
        aliases: ["1c26", "languages", "languages room"]
    },

    {
        id: "Kitchen",
        name: "Kitchen",
        floor: "first",
        aliases: ["kitchen"]
    },
    
    {
        id: "2A07",
        mapId: "2A07",
        name: "Spanish",
        floor: "second",
        aliases: ["2a07", "2 a07", "spanish"]
    },

    {
        id: "2A08",
        mapId: "2A08",
        name: "Mandarin / TOK",
        floor: "second",
        aliases: ["2a08", "2 a08", "mandarin", "tok"]
    },

    {
        id: "2A09",
        mapId: "2A09",
        name: "Math",
        floor: "second",
        aliases: ["2a09", "2 a09", "math"]
    },

    {
        id: "2A10",
        mapId: "2A10",
        name: "Math",
        floor: "second",
        aliases: ["2a10", "2 a10", "math"]
    },

    {
        id: "2A11",
        mapId: "2A11",
        name: "Math",
        floor: "second",
        aliases: ["2a11", "2 a11", "math"]
    },

    {
        id: "2A12",
        mapId: "2A12",
        name: "Lab Store",
        floor: "second",
        aliases: ["2a12", "2 a12", "lab store", "store"]
    },

    {
        id: "2A13",
        mapId: "2A13",
        name: "Math",
        floor: "second",
        aliases: ["2a13", "2 a13", "math"]
    },

    {
        id: "2A15",
        mapId: "2A15",
        name: "Science Lab",
        floor: "second",
        aliases: ["2a15", "2 a15", "science lab", "science"]
    },

    {
        id: "2A18",
        mapId: "2A18",
        name: "Lab Store",
        floor: "second",
        aliases: ["2a18", "2 a18", "lab store", "store"]
    },

    {
        id: "2A19",
        mapId: "2A19",
        name: "Science Lab",
        floor: "second",
        aliases: ["2a19", "2 a19", "science lab", "science"]
    },

    {
        id: "2A20",
        mapId: "2A20",
        name: "Science Lab",
        floor: "second",
        aliases: ["2a20", "2 a20", "science lab", "science"]
    },

    {
        id: "2A21",
        mapId: "2A21",
        name: "Lab Store",
        floor: "second",
        aliases: ["2a21", "2 a21", "lab store", "store"]
    },

    {
        id: "2A22",
        mapId: "2A22",
        name: "Science Lab",
        floor: "second",
        aliases: ["2a22", "2 a22", "science lab", "science"]
    },

    {
        id: "2B01",
        mapId: "2B01",
        name: "I&S / TOK",
        floor: "second",
        aliases: ["2b01", "2 b01", "i&s", "tok"]
    },

    {
        id: "2B03",
        mapId: "2B03",
        name: "Music Room",
        floor: "second",
        aliases: ["2b03", "2 b03", "music room", "music"]
    },

    {
        id: "2B04",
        mapId: "2B04",
        name: "Music Store",
        floor: "second",
        aliases: ["2b04", "2 b04", "music store", "store"]
    },

    {
        id: "2B13",
        mapId: "2B13",
        name: "Spanish",
        floor: "second",
        aliases: ["2b13", "2 b13", "spanish"]
    },

    {
        id: "2B14",
        mapId: "2B14",
        name: "History / I&S",
        floor: "second",
        aliases: ["2b14", "2 b14", "history", "i&s"]
    },

    {
        id: "2B15",
        mapId: "2B15",
        name: "French",
        floor: "second",
        aliases: ["2b15", "2 b15", "french"]
    },

    {
        id: "2B16",
        mapId: "2B16",
        name: "Geography / I&S",
        floor: "second",
        aliases: ["2b16", "2 b16", "geography", "i&s"]
    },

    {
        id: "2B17",
        mapId: "2B17",
        name: "French",
        floor: "second",
        aliases: ["2b17", "2 b17", "french"]
    },

    {
        id: "2B11",
        mapId: "2B11",
        name: "",
        floor: "second",
        aliases: ["2b11", "2 b11"]
    },

    {
        id: "music-pods",
        mapId: "music-pods",
        name: "Music Pods",
        floor: "second",
        aliases: ["music pods", "music pod", "pods"]
    },

    {
        id: "2C07",
        mapId: "2C07",
        name: "",
        floor: "second",
        aliases: ["2c07", "2 c07"]
    },

    {
        id: "2C08",
        mapId: "2C08",
        name: "Design / Technology",
        floor: "second",
        aliases: ["2c08", "2 c08", "design", "technology", "design technology"]
    },

    {
        id: "2C09",
        mapId: "2C09",
        name: "Design",
        floor: "second",
        aliases: ["2c09", "2 c09", "design"]
    },

    {
        id: "2C10",
        mapId: "2C10",
        name: "Design",
        floor: "second",
        aliases: ["2c10", "2 c10", "design"]
    },

    {
        id: "2C11",
        mapId: "2C11",
        name: "Head of Secondary",
        floor: "second",
        aliases: ["2c11", "2 c11", "head of secondary"]
    },

    {
        id: "2C21",
        mapId: "2C21",
        name: "Design",
        floor: "second",
        aliases: ["2c21", "2 c21", "design"]
    },

    {
        id: "2C22",
        mapId: "2C22",
        name: "EAL",
        floor: "second",
        aliases: ["2c22", "2 c22", "eal"]
    },

    {
        id: "2C24",
        mapId: "2C24",
        name: "Art Room",
        floor: "second",
        aliases: ["2c24", "2 c24", "art", "art room"]
    },

    {
        id: "2C25",
        mapId: "2C25",
        name: "Language & Literature",
        floor: "second",
        aliases: ["2c25", "2 c25", "language", "literature"]
    },

    {
        id: "2C26",
        mapId: "2C26",
        name: "Art Room",
        floor: "second",
        aliases: ["2c26", "2 c26", "art", "art room"]
    },

    {
        id: "2C27",
        mapId: "2C27",
        name: "IT",
        floor: "second",
        aliases: ["2c27", "2 c27", "it", "information technology"]
    },

    {
        id: "2C20",
        mapId: "2C20",
        name: "Store",
        floor: "second",
        aliases: ["2c20", "2 c20", "store"]
    },

    {
        id: "Store",
        mapId: "Store",
        name: "Store",
        floor: "second",
        aliases: ["store"]
    }
];

/* =========================
   GET HTML ELEMENTS
========================= */

const searchButton = document.getElementById("searchButton");
const roomSearch = document.getElementById("roomSearch");
const result = document.getElementById("result");

const floorButtons = document.querySelectorAll(".floor-button");

const mapContainer = document.getElementById("mapContainer");

const zoomInButton = document.getElementById("zoomIn");
const zoomOutButton = document.getElementById("zoomOut");

const searchSuggestions =
    document.getElementById("searchSuggestions");

let zoomLevel = 1;

let panX = 0;
let panY = 0;

const zoomStep = 0.2;
const minZoom = 0.5;
const maxZoom = window.matchMedia("(max-width: 600px)").matches
    ? 5
    : 3;

let isDragging = false;
let startX = 0;
let startY = 0;
let currentFloor = "ground";


/* =========================
   LOAD FLOOR SVG
========================= */

function loadMap(filename) {

    // Remove any previous error message
    mapContainer.innerHTML = "";

    if (filename === "GroundFloor.svg") {
        currentFloor = "ground";
    } else if (filename === "FirstFloor.svg") {
        currentFloor = "first";
    } else if (filename === "SecondFloor.svg") {
        currentFloor = "second";
    }

    return fetch(filename)
        .then(function(response) {

            if (!response.ok) {
                throw new Error("Could not load " + filename);
            }

            return response.text();
        })

        .then(function(svgText) {

            mapContainer.innerHTML = svgText;

            console.log("1A06 direct:", document.getElementById("1A06"));
            console.log("1A10 direct:", document.getElementById("1A10"));
            console.log("1B04 direct:", document.getElementById("1B04"));
            console.log("1C06 direct:", document.getElementById("1C06"));
            
            console.log("SVG INSERTED:", filename);
            
            // Reset map position when changing floors
            zoomLevel = 1;
            panX = 0;
            panY = 0;

            updateMapTransform();

            console.log(filename + " loaded.");

        })

        .catch(function(error) {

            console.error(error);

            mapContainer.innerHTML =
                "<p>❌ Could not load " + filename + "</p>";

        });
}


/* Load map when page starts */

loadMap("GroundFloor.svg");



/* =========================
   HIGHLIGHT ROOM
========================= */
function getRoomIds(room) {

    if (room.idsByFloor) {
        return room.idsByFloor[currentFloor] || [];
    }

    if (room.ids) {
        return room.ids;
    }

    if (room.id) {
        return [room.id];
    }

    return [];
}


function highlightRooms(roomList) {

    const svg = document.querySelector("#mapContainer svg");

    if (!svg) return;


    // Remove previous highlight overlay
    const oldOverlay = svg.querySelector("#highlightOverlay");

    if (oldOverlay) {
        oldOverlay.remove();
    }


    // Create new overlay on top of everything
    const overlay = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
    );

    overlay.setAttribute("id", "highlightOverlay");
    overlay.setAttribute("pointer-events", "none");

    svg.appendChild(overlay);


    // Highlight selected rooms
    roomList.forEach(function(room) {

        getRoomIds(room).forEach(function(id) {

            let element = document.getElementById(id);

            if (!element) {
                element = Array.from(
                    svg.querySelectorAll("*")
                ).find(function(item) {
                    return (
                        item.id === id ||
                        item.getAttribute("serif:id") === id
                    );
                });
            }

            if (!element) return;

            // Create a wrapper for parent transforms
            const wrapper = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "g"
            );


            // Get the parent position relative to the SVG
            const parent = element.parentElement;

            if (parent) {

                const svgMatrix = svg.getScreenCTM();
                const parentMatrix = parent.getScreenCTM();

                if (svgMatrix && parentMatrix) {

                    const relativeMatrix =
                        svgMatrix.inverse().multiply(parentMatrix);

                    wrapper.setAttribute(
                        "transform",
                        `matrix(
                            ${relativeMatrix.a},
                            ${relativeMatrix.b},
                            ${relativeMatrix.c},
                            ${relativeMatrix.d},
                            ${relativeMatrix.e},
                            ${relativeMatrix.f}
                        )`
                    );
                }
            }


            // Copy the room itself
            const clone = element.cloneNode(true);

            clone.removeAttribute("id");

            clone.querySelectorAll("[id]").forEach(function(item) {
                item.removeAttribute("id");
            });


            // Highlight the copied room
            clone.classList.add("room-highlight");

            const isIcon =
                room.id === "Exit" ||
                room.id === "Stairs" ||
                room.id === "Elevator";

            if (isIcon) {
                clone.classList.add("icon-highlight");
            }

            clone.querySelectorAll(
                "path, rect, polygon, line, circle, polyline, ellipse"
            ).forEach(function(shape) {

                shape.classList.add("room-highlight");

                if (isIcon) {
                    shape.classList.add("icon-highlight");
                }

            });


            // No fill, only the outline
            if (room.id !== "Exit" && room.id !== "Stairs" && room.id !== "Elevator") {
                clone.style.setProperty(
                    "fill",
                    "none",
                    "important"
                );
            }


            wrapper.appendChild(clone);
            overlay.appendChild(wrapper);

        });

    });

}

/* =========================
   AUTO ZOOM TO ROOM
========================= */
function zoomToRoom(room) {

    const targetZoom =
        window.matchMedia("(max-width: 600px)").matches
            ? 3.5
            : 2;

    const map = document.querySelector("#mapContainer svg");

    if (!map) return;

    map.style.transition = "none";

    zoomLevel = targetZoom;

    updateMapTransform();

    map.getBoundingClientRect();

    centerOnRoom(room);
}


function centerOnRoom(room) {

    const ids = getRoomIds(room);

    if (ids.length === 0) return;

    const element = document.getElementById(ids[0]);

    if (!element) return;

    const map = document.querySelector("#mapContainer svg");

    if (!map) return;

    const roomRect = element.getBoundingClientRect();
    const containerRect = mapContainer.getBoundingClientRect();

    const roomCenterX = roomRect.left + roomRect.width / 2;
    const roomCenterY = roomRect.top + roomRect.height / 2;

    const containerCenterX =
        containerRect.left + containerRect.width / 2;

    const containerCenterY =
        containerRect.top + containerRect.height / 2;

    panX += containerCenterX - roomCenterX;
    panY += containerCenterY - roomCenterY;

    map.style.transition = "transform 0.5s ease";

    updateMapTransform();

    setTimeout(function () {
        map.style.transition = "";
    }, 500);
}

/* =========================
   SEARCH ROOM
========================= */

function searchRoom(searchText) {

    const query = normalizeSearch(searchText);

    const matches = rooms.filter(function (room) {

        const roomID =
            room.id
                ? normalizeSearch(room.id)
                : "";

        const roomIDs =
            room.ids
                ? room.ids.map(function (id) {
                    return normalizeSearch(id);
                })
                : [];

        const roomName =
            room.name
                ? normalizeSearch(room.name)
                : "";

        const aliases =
            room.aliases.map(function (alias) {
                return normalizeSearch(alias);
            });

        return (
            roomID === query ||
            roomIDs.includes(query) ||
            roomName === query ||
            aliases.includes(query)
        );
    });

    if (matches.length === 0) {
        result.textContent =
            "❌ Room " + searchText + " was not found.";

        return;
    }

    // Prefer a room on the current floor
    let room = matches.find(function (item) {
        return item.floor === currentFloor || item.allFloors;
    });

    // If there isn't one on this floor, use the first match
    if (!room) {
        room = matches[0];
    }

    // Switch floor if necessary
    if (room.floor !== currentFloor && !room.allFloors) {

        const floorFiles = {
            ground: "GroundFloor.svg",
            first: "FirstFloor.svg",
            second: "SecondFloor.svg"
        };

        setActiveFloor(room.floor);

        loadMap(floorFiles[room.floor]).then(function () {

            console.log("MAP FINISHED LOADING:", room.floor);

            const newFloorMatches = matches.filter(function (item) {
                return item.floor === currentFloor;
            });

            console.log("ROOMS TO HIGHLIGHT:", newFloorMatches);

            highlightRooms(newFloorMatches);
            zoomToRoom(newFloorMatches[0]);

        });

        return;
    }

    const floorMatches = matches.filter(function (item) {
        return item.floor === currentFloor || item.allFloors;
    });

    highlightRooms(floorMatches);
    zoomToRoom(floorMatches[0]);
}


/* =========================
   SEARCH BUTTON
========================= */

searchButton.addEventListener("click", function() {

    const room = roomSearch.value
        .trim()
        .toUpperCase();

    searchRoom(room);

});

/* =========================
   SEARCH BOX
========================= */
function normalizeSearch(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}

function showSuggestions(searchText) {

    const query = normalizeSearch(searchText);

    searchSuggestions.innerHTML = "";

    if (!query) {
        searchSuggestions.style.display = "none";
        return;
    }


    const matches = rooms.filter(function (room) {

        const roomID =
            room.id
                ? normalizeSearch(room.id)
                : "";

        const roomName =
            room.name
                ? normalizeSearch(room.name)
                : "";

        const aliases =
            room.aliases.map(function (alias) {
                return normalizeSearch(alias);
            });

        return (
            roomID.includes(query) ||
            roomName.includes(query) ||
            aliases.some(function (alias) {
                return alias.includes(query);
            })
        );

    }).slice(0, 6);


    if (matches.length === 0) {
        searchSuggestions.style.display = "none";
        return;
    }


    matches.forEach(function (room) {

        const suggestion =
            document.createElement("div");

        suggestion.classList.add("suggestion");

        suggestion.innerHTML = `
            <div class="suggestion-room">
                ${room.id || room.name}
            </div>

            ${
                room.id
                    ? `<div class="suggestion-name">${room.name}</div>`
                    : ""
            }
        `;


        suggestion.addEventListener("click", function () {

            roomSearch.value = room.id || room.name;

            searchSuggestions.style.display = "none";

            searchRoom(room.id || room.name);

        });


        searchSuggestions.appendChild(suggestion);

    });


    searchSuggestions.style.display = "block";
}

/* =========================
   PRESS ENTER TO SEARCH
========================= */

roomSearch.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const room = roomSearch.value
            .trim()
            .toUpperCase();

        searchRoom(room);

    }

});


/* =========================
   FLOOR BUTTONS
========================= */
function setActiveFloor(floor) {

    floorButtons.forEach(function(button) {

        if (button.dataset.floor === floor) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }

    });

}


floorButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get selected floor
        const floor = button.dataset.floor;

        setActiveFloor(floor);

        console.log(
            "Selected floor:",
            floor
        );


        /*

        We only have ground.svg right now.

        We'll add:

        first.svg

        second.svg

        later.

        */

        if (floor === "ground") {

            loadMap("GroundFloor.svg");

        }

        else if (floor === "first") {

            loadMap("FirstFloor.svg");

        }

        else if (floor === "second") {

            loadMap("SecondFloor.svg");

        }

    });

});


/* =========================
   UPDATE MAP
========================= */

function updateMapTransform() {
    const map = document.querySelector("#mapContainer svg");

    if (!map) {
        return;
    }

    map.style.transform =
        `translate(${panX}px, ${panY}px) scale(${zoomLevel})`;

    map.style.transformOrigin = "center center";
}


/* =========================
   ZOOM BUTTONS
========================= */

zoomInButton.addEventListener("click", function () {
    changeZoom(zoomStep);
});

zoomOutButton.addEventListener("click", function () {
    changeZoom(-zoomStep);
});


/* =========================
   CHANGE ZOOM
========================= */

function changeZoom(amount) {

    zoomLevel += amount;

    if (zoomLevel > maxZoom) {
        zoomLevel = maxZoom;
    }

    if (zoomLevel < minZoom) {
        zoomLevel = minZoom;
    }

    updateMapTransform();
}


/* =========================
   MOUSE WHEEL ZOOM
========================= */

mapContainer.addEventListener("wheel", function (event) {

    // Prevent the whole webpage from scrolling
    event.preventDefault();

    if (event.deltaY < 0) {
        // Wheel up → zoom in
        changeZoom(zoomStep);
    } else {
        // Wheel down → zoom out
        changeZoom(-zoomStep);
    }

}, { passive: false });


/* =========================
   DRAG START
========================= */

mapContainer.addEventListener("mousedown", function (event) {

    if (event.target.closest(".top-ui")) {
        return;
    }

    const map = document.querySelector("#mapContainer svg");

    if (!map) {
        return;
    }

    isDragging = true;

    startX = event.clientX - panX;
    startY = event.clientY - panY;

    mapContainer.classList.add("dragging");

});


/* =========================
   DRAGGING
========================= */

document.addEventListener("mousemove", function (event) {

    if (!isDragging) {
        return;
    }

    panX = event.clientX - startX;
    panY = event.clientY - startY;

    updateMapTransform();

});


/* =========================
   DRAG END
========================= */

document.addEventListener("mouseup", function () {

    if (!isDragging) {
        return;
    }

    isDragging = false;

    mapContainer.classList.remove("dragging");

});

roomSearch.addEventListener("input", function () {

    showSuggestions(roomSearch.value);

});

document.addEventListener("click", function (event) {

    if (!event.target.closest(".search-box")) {
        searchSuggestions.style.display = "none";
    }

});

/* =========================
   COLOR THEMES
========================= */

const themes = {

    light: {
        ui: "rgb(0, 0, 0)",
        background: "rgb(247, 246, 246)"
    },


    ocean: {
        ui: "rgb(255, 255, 255)",
        background: "rgb(16, 47, 84)"
    },


    dark: {
        ui: "rgb(230, 230, 230)",
        background: "rgb(25, 25, 25)"
    },

    warm: {
        ui: "rgb(70, 45, 30)",
        background: "rgb(244, 225, 200)"
    }

};


const themeButtons =
    document.querySelectorAll(".theme-button");


themeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const themeName = button.dataset.theme;
        const theme = themes[themeName];


        document.documentElement.style.setProperty(
            "--ui-color",
            theme.ui
        );

        document.documentElement.style.setProperty(
            "--wall-color",
            theme.wall
        );

        document.documentElement.style.setProperty(
            "--text-color",
            theme.text
        );

        document.documentElement.style.setProperty(
            "--background-color",
            theme.background
        );


        themeButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

    });

});

/* =========================
   TOUCH MAP CONTROLS
========================= */

let pinchStartDistance = 0;
let pinchStartZoom = 1;

function getTouchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;

    return Math.sqrt(dx * dx + dy * dy);
}

mapContainer.addEventListener("touchstart", function (event) {

    if (event.touches.length === 1) {

        const touch = event.touches[0];

        isDragging = true;

        startX = touch.clientX - panX;
        startY = touch.clientY - panY;

    }

    else if (event.touches.length === 2) {

        event.preventDefault();

        isDragging = false;

        pinchStartDistance =
            getTouchDistance(event.touches);

        pinchStartZoom = zoomLevel;
    }

}, { passive: false });


mapContainer.addEventListener("touchmove", function (event) {

    event.preventDefault();

    if (event.touches.length === 2) {

        const currentDistance =
            getTouchDistance(event.touches);

        const zoomRatio =
            currentDistance / pinchStartDistance;

        zoomLevel =
            pinchStartZoom * zoomRatio;

        if (zoomLevel > maxZoom) {
            zoomLevel = maxZoom;
        }

        if (zoomLevel < minZoom) {
            zoomLevel = minZoom;
        }

        updateMapTransform();

        return;
    }

    if (event.touches.length === 1 && isDragging) {

        const touch = event.touches[0];

        panX = touch.clientX - startX;
        panY = touch.clientY - startY;

        updateMapTransform();
    }

}, { passive: false });


mapContainer.addEventListener("touchend", function (event) {

    if (event.touches.length === 0) {

        isDragging = false;

    }

    else if (event.touches.length === 1) {

        const touch = event.touches[0];

        isDragging = true;

        startX = touch.clientX - panX;
        startY = touch.clientY - panY;
    }

});


/* =========================
   MOBILE LOADING SCREEN
========================= */

const topUI = document.querySelector(".top-ui");

if (window.matchMedia("(max-width: 600px)").matches) {

    setTimeout(function () {

        topUI.classList.remove("mobile-loading");

    }, 1200);

}

/* =========================
   MOBILE COMPASS
========================= */

const mobileCompass =
    document.getElementById("mobileCompass");

const compassArrow =
    document.querySelector(".compass-arrow");

const compassLabel =
    document.querySelector(".compass-label");

let compassListening = false;
let compassHasHeading = false;


function updateCompass(event) {

    let heading = null;

    // iPhone / iPad compass heading
    if (
        typeof event.webkitCompassHeading === "number" &&
        Number.isFinite(event.webkitCompassHeading)
    ) {
        heading = event.webkitCompassHeading;
    }

    // Devices reporting absolute orientation
    else if (
        event.absolute === true &&
        typeof event.alpha === "number" &&
        Number.isFinite(event.alpha)
    ) {
        heading = (360 - event.alpha + 360) % 360;
    }

    // No reliable compass heading received
    if (heading === null) return;

    compassHasHeading = true;

    // Rotate the arrow to show facing direction
    compassArrow.style.transform =
        `rotate(${heading}deg)`;

    compassLabel.textContent =
        `${Math.round(heading)}°`;
}


async function startCompass() {

    // HTTPS is required
    if (!window.isSecureContext) {
        compassLabel.textContent = "HTTPS";
        return;
    }

    // Check browser support
    if (typeof DeviceOrientationEvent === "undefined") {
        compassLabel.textContent = "N/A";
        return;
    }

    if (compassListening) return;

    try {

        // Request sensor permission where required
        if (
            typeof DeviceOrientationEvent.requestPermission
            === "function"
        ) {

            const permission =
                await DeviceOrientationEvent.requestPermission(true);

            if (permission !== "granted") {
                compassLabel.textContent = "Denied";
                return;
            }
        }

        compassListening = true;
        compassLabel.textContent = "Move";

        window.addEventListener(
            "deviceorientation",
            updateCompass
        );

        window.addEventListener(
            "deviceorientationabsolute",
            updateCompass
        );

        // Show a diagnostic if no heading arrives
        setTimeout(function () {
            if (!compassHasHeading) {
                compassLabel.textContent = "No signal";
            }
        }, 3000);

    } catch (error) {

        console.error("Compass error:", error);
        compassLabel.textContent = "Error";
    }
}


mobileCompass.addEventListener(
    "click",
    startCompass
);