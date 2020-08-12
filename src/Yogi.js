import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const Yogi = () => {

    useEffect(() => {
        const tl = gsap.timeline()
            tl.set("#leg, #leg_2", {transformOrigin: "40%, 10%"})

            tl.to('#leg', 3,{rotate: -80, yoyo: true, repeat: -1, ease: "none"})
            tl.to('#leg_2', 3,{rotate: -80, yoyo: true, repeat: -1, ease: "none"})

        
    }, [])

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            fill="none"
            viewBox="0 0 52 201"
            overflow="visible"
        >
            <g id="yogi">
            <g id="arm" fill="#C19E83">
                <g id="lower-arm">
                <g id="forearm">
                    <path d="M22.675 75.478c2.194-.204 3.862-2.3 3.727-4.68-.136-2.382-2.024-4.147-4.217-3.943-2.194.204-3.862 2.3-3.727 4.68.136 2.382 2.024 4.147 4.217 3.943zm1.198 21.078c1.645-.153 2.002-1.6 1.897-3.452-.105-1.852-.633-3.408-2.278-3.255-1.645.153-2.076 1.642-1.971 3.494.105 1.852.707 3.365 2.352 3.213z"></path>
                    <path d="M26.402 70.797c.135 2.382-1.533 4.477-3.727 4.68-2.194.205-4.082-1.56-4.217-3.942-.004 5.78 2.222 18.12 3.063 21.808-.105-1.852.326-3.341 1.971-3.494 1.645-.153 2.173 1.403 2.278 3.255-.218-3.845 1.024-18.33.632-22.306z"></path>
                </g>
                <path
                    id="hand"
                    d="M21.772 93.907c1.277-1.886 2.862-2.72 5.148 1.999.205 1.099-.031 4.206-.42 4.094-.394.271-.948-.554-1.093-2.448.276 3.84.165 4.766-.408 4.948-.39.124-.64-.036-.799-.357-.052.444-.202.769-.51.857-.421.233-.683-.235-.845-.954-.079.228-.206.37-.398.378-.442.019-.62-.558-.705-1.281-1.124.332-1.14-4.971.03-7.236z"
                ></path>
                </g>
                <g id="upper-limb">
                <path d="M20.318 48.079c2.627-.308 5.216-5.316 4.968-8.383-1.1-2.344-3.241-3.033-5.868-2.725-2.627.308-4.555 3.045-4.307 6.112.249 3.067 2.58 5.304 5.207 4.996zm2.2 27.151c1.97-.23 3.411-2.352 3.218-4.737-.194-2.386-1.948-4.133-3.918-3.902-1.97.231-3.41 2.353-3.217 4.738.193 2.386 1.947 4.132 3.917 3.901z"></path>
                <path d="M25.286 39.696c.248 3.067-2.34 8.075-4.968 8.383-2.627.308-4.958-1.929-5.207-4.996.204 7.451 1.187 23.533 3.49 28.246-.194-2.385 1.247-4.507 3.217-4.738 1.97-.23 3.724 1.516 3.918 3.902 1.344-10.188 2.383-24.756-.45-30.797z"></path>
                </g>
            </g>
            <g id="leg">
                <g id="low-leg">
                <g id="foot" fill="#C1A289">
                    <path
                    id="foot-pointed"
                    display="none"
                    d="M24.481 198.706c1.734-.991 3.574-10.253 3.112-17.825-.193-3.162-4.81-2.471-7.484-2.031-2.674.44-3.404 4.746-3.404 4.746.393 1.366.72 1.749 3.302 3.768 3.975 6.224.101 9.238 4.474 11.342z"
                    ></path>
                    <path
                    id="foot-planted"
                    d="M39.146 188.744c1.174-1.181-9.005-3.434-12.738-10.418-1.493-2.794-6.315 2.613-7.74 4.919-1.424 2.306.681 4.194.681 4.194 1.288.601 3.494.865 6.922 1.091 7.304 1.091 6.366 1.737 12.875.214z"
                    ></path>
                    <path
                    id="ankle"
                    d="M27.593 180.882c-1.368-.801-7.283-.821-9.253 2.94.69-3.103 2.276-4.821.746-11.312.567.005 5.195 1.42 7.559 1.208l.948 7.164z"
                    ></path>
                </g>
                <path
                    id="calf"
                    fill="#43544E"
                    d="M28.875 146.341c.353-2.245 1.77-5.134 1.47-9.355-1.604-11.424-8.721-5.085-11.185-1.757-7.379 19.113.15 38.076.444 41.949 1.445.205 4.511 1.079 7.527.11-1.284-6.892 1.304-28.14 1.744-30.947z"
                ></path>
                </g>
                <path
                id="thigh"
                fill="#43544E"
                d="M34.18 92.279C35.286 73.155 12.213 77 12.213 92.32c-.13.945-.162 3.65 1.286 6.18 0 9 1.8 26.687 3.856 34.307.714 2.646 1.288 4.773 1.555 6.165 1.924 3.176 6.881 7.617 11.322-.021 4.595-31.994 4.226-39.963 4.015-44.527a49.59 49.59 0 01-.069-2.145z"
                ></path>
            </g>
            <g id="leg_2">
                <g id="low-leg_2">
                <g id="foot_2" fill="#C1A289">
                    <path
                    id="foot-pointed_2"
                    display="none"
                    d="M24.481 198.706c1.734-.991 3.574-10.253 3.112-17.825-.193-3.162-4.809-2.471-7.484-2.031-2.674.44-3.404 4.746-3.404 4.746.393 1.366.72 1.749 3.302 3.768 3.975 6.224.101 9.238 4.474 11.342z"
                    ></path>
                    <path
                    id="foot-planted_2"
                    d="M39.146 188.744c1.174-1.181-9.005-3.434-12.738-10.418-1.493-2.794-6.315 2.613-7.74 4.919-1.424 2.306.681 4.194.681 4.194 1.289.601 3.494.865 6.922 1.091 7.304 1.091 6.367 1.737 12.875.214z"
                    ></path>
                    <path
                    id="ankle_2"
                    d="M27.593 180.882c-1.367-.801-7.283-.821-9.253 2.94.69-3.103 2.276-4.821.746-11.312.567.005 5.195 1.42 7.559 1.208l.948 7.164z"
                    ></path>
                </g>
                <path
                    id="calf_2"
                    fill="#4E5F59"
                    d="M28.875 146.341c.353-2.245 1.77-5.134 1.47-9.355-1.604-11.424-8.721-5.085-11.185-1.757-7.379 19.113.151 38.076.444 41.949 1.445.205 4.511 1.079 7.527.11-1.284-6.892 1.304-28.14 1.744-30.947z"
                ></path>
                </g>
                <path
                id="thigh_2"
                fill="#4E5F59"
                d="M34.18 92.279C35.286 73.155 12.213 77 12.213 92.32c-.13.945-.162 3.65 1.286 6.18 0 9 1.8 26.687 3.856 34.307.714 2.646 1.288 4.773 1.555 6.165 1.924 3.176 6.882 7.617 11.322-.021 4.595-31.994 4.226-39.963 4.015-44.527a49.59 49.59 0 01-.069-2.145z"
                ></path>
            </g>
            <g id="upper-body">
                <path
                id="neck"
                fill="#BB9A80"
                d="M15 27.5c.5 2.5-.949 7.552-1.89 8.944l12.839-.808c-2.053-3.485-.452-3.914 0-6.136L15 27.5z"
                ></path>
                <path
                id="torso"
                fill="#C1A289"
                d="M15.335 82.36c1.764-10.994-4.29-33.05-4.635-34.595-1.835-5.397.352-10.541.352-10.541s1.313-3.087 5.706-4.16c3.217-1.478 14.572.433 15.224 11.034.769 12.476 7.313 17.77 1.953 39.306-3.37 2.899-13.961 1.814-18.6-1.044z"
                ></path>
                <path
                id="pelvis"
                fill="#4E5F59"
                d="M15.5 80c0 1.5-.498 3.466-.5 4.5 0 0-.967 6.471 2.926 8.614 2.367.772 9.636 2.01 14.295.036 1.066-.372 1.794-3.712 1.794-3.712.579-2.782.365-9.117.365-9.117-5.396-.011-18.108-.858-18.88-.321z"
                ></path>
                <g id="head">
                <g id="face" fill="#C19F84">
                    <path d="M28.087 18.5c.49 1.25.234 2.329.413 4 0 1-.018.259 0 1 .511 1.067.477 1.203.648 1.543-.013.327-.648.713-.648.713 1.11.05-.083 1.843-.11 2.457-.11.998.114 1.602-.303 2.115-2.77 1.933-9.958-.412-11.159-1.082-1.801-1.004-3.703-1.836-5.834-5.374-2.889-5.295-.683-11.574 3.347-13.152 2.89-1.132 8.16-1.114 11.238 1.557 1.123.975 1.701 4.586 2.408 6.223z"></path>
                    <path d="M28.087 18.5c.49 1.25.234 2.329.413 4 .812-.5 1.345-.95 1.622-1.31.494-.64-1.257-.89-2.035-2.69z"></path>
                </g>
                <path
                    id="hair"
                    fill="#420505"
                    d="M16.573 18.623c-1.115 2.611-6.028 5.24-7.03 2.613-1.859-4.877-.606-9.571 2.192-8.88-1.13-2.635 4.791-3.084 4.717-2.783 1.964-2.635-1.721-2.173-1.813-2.597 1.193.294 2.846-.604 3.844-.236a4.076 4.076 0 01-.34-.438c.57.308 1.774 1.077 2.018 1.687-.26-1.407-.685-2.755-.782-3.376 1.246.956 2.546 2.175 3.398 3.513.35-.182.798-.92-.201-2.415.787.225 2.363.853 2.514 1.598-.188-1.19-.586-2.516-1.245-3.95 8.188 8.499 4.352 10.315 3.148 11.22-1.004 2.159-5.418 2.071-7.5 1.758-2.687-1.798-2.871 1.296-2.92 2.286z"
                ></path>
                </g>
                <g id="arm_2" fill="#C19E83">
                <g id="lower-arm_2">
                    <g id="forearm_2">
                    <path d="M22.675 75.478c2.194-.204 3.862-2.3 3.727-4.68-.136-2.382-2.024-4.147-4.217-3.943-2.194.204-3.862 2.3-3.727 4.68.136 2.382 2.024 4.147 4.217 3.943zm1.198 21.078c1.645-.153 2.002-1.6 1.897-3.452-.105-1.852-.633-3.408-2.278-3.255-1.645.153-2.076 1.642-1.971 3.494.105 1.852.707 3.365 2.352 3.213z"></path>
                    <path d="M26.402 70.797c.135 2.382-1.533 4.477-3.727 4.68-2.194.205-4.082-1.56-4.217-3.942-.004 5.78 2.222 18.12 3.063 21.808-.105-1.852.326-3.341 1.971-3.494 1.645-.153 2.173 1.403 2.278 3.255-.218-3.845 1.024-18.33.632-22.306z"></path>
                    </g>
                    <path
                    id="hand_2"
                    d="M21.772 93.907c1.277-1.886 2.862-2.72 5.148 1.999.205 1.099-.031 4.206-.42 4.094-.394.271-.948-.554-1.093-2.448.276 3.84.165 4.766-.408 4.948-.39.124-.64-.036-.799-.357-.052.444-.202.769-.51.857-.421.233-.683-.235-.845-.954-.079.228-.206.37-.398.378-.442.019-.62-.558-.705-1.281-1.124.332-1.14-4.971.03-7.236z"
                    ></path>
                </g>
                <g id="upper-limb_2">
                    <path d="M20.318 48.079c2.627-.308 5.216-5.316 4.968-8.383-1.1-2.344-3.241-3.033-5.868-2.725-2.627.308-4.555 3.045-4.307 6.112.249 3.067 2.58 5.304 5.207 4.996zm2.2 27.151c1.97-.23 3.411-2.352 3.218-4.737-.194-2.386-1.948-4.133-3.918-3.902-1.97.231-3.41 2.353-3.217 4.738.193 2.386 1.947 4.132 3.917 3.901z"></path>
                    <path d="M25.286 39.696c.248 3.067-2.34 8.075-4.968 8.383-2.627.308-4.958-1.929-5.207-4.996.204 7.451 1.187 23.533 3.49 28.246-.194-2.385 1.247-4.507 3.217-4.738 1.97-.23 3.724 1.516 3.918 3.902 1.344-10.188 2.383-24.756-.45-30.797z"></path>
                </g>
                </g>
            </g>
            </g>
        </svg>
    )
}

export default Yogi
