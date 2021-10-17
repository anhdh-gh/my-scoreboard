const Util = {
    convertDataSnapshotToArray: (dataSnapshot) => {
        return Object?.values(dataSnapshot)
            ?.map((item, index) => ({ ...item, id: Object?.keys(dataSnapshot)[index] }))
    },

    fomatScores: (scores) => {
        return scores
        ?.map(score => ({
            ...score,
            diemChu: score?.tongKet === '4.0' ? 'A+' :
            score?.tongKet === '3.7' ? 'A' :
            score?.tongKet === '3.5' ? 'B+' :
            score?.tongKet === '3.0' ? 'B' :
            score?.tongKet === '2.5' ? 'C+' :
            score?.tongKet === '2.0' ? 'C' :
            score?.tongKet === '1.5' ? 'D+' :
            score?.tongKet === '1.0' ? 'D' : 'F'
        }))
        ?.sort((score1, score2) =>
            score1?.tongKet !== score2?.tongKet
                ? score2?.tongKet - score1?.tongKet
                : score2?.soTinChi - score1?.soTinChi
        )
    },

    findScore: (scores, keyword) => {
        return keyword?.trim()
        ? scores?.filter(score =>
            score?.tenHocPhan?.toLowerCase()?.includes(keyword?.trim()?.toLowerCase()) ||
            score?.soTinChi?.toLowerCase()?.includes(keyword?.trim()?.toLowerCase()) ||
            score?.tongKet?.toLowerCase()?.includes(keyword?.trim()?.toLowerCase()) ||
            score?.diemChu?.toLowerCase()?.includes(keyword?.trim()?.toLowerCase()))
        : scores
    },

    formatUserInfo: (user) => {
        return {
            displayName: user?.displayName,
            email: user?.email,
            emailVerified: user?.emailVerified,
            isAnonymous: user?.isAnonymous,
            phoneNumber: user?.phoneNumber,
            photoURL: user?.photoURL,
            uid: user?.uid,
        }
    }
}

export default Util