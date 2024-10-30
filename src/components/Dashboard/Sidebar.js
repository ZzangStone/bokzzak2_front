import React from 'react';

function Sidebar() {
  return (
    <div style={{
      width: '200px',
      height: '100vh',
      backgroundColor: '#333',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '20px'
    }}>
      {/* 프로젝트 제목 */}
      <h2 style={{
        marginBottom: '20px',
        color: '#FFD700', // 강조 색상
        fontSize: '30px', // 제목 크기 조정
      }}>복작복작</h2>

      {/* 메뉴 항목 */}
      <h3 style={{ marginBottom: '20px' }}>메뉴</h3>
      <div style={{
        width: '100%',
        padding: '10px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: '#444',
        borderBottom: '1px solid #555'
      }}>
        데이터 분석
      </div>
      <div style={{
        width: '100%',
        padding: '10px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: '#444',
      }}>
        데이터 예측
      </div>
    </div>
  );
}

export default Sidebar;
